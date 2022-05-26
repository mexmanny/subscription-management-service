const { request } = require("express");
const express = require("express");
const moment = require("moment");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

const imageInfo = require("./jsonfiles/images.json");

app.use(express.json());

app.get("/subscriptions/reports", (req, res) => {
  const { frequency } = req.query;
  const currentFileData = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "jsonfiles/subscriptions.json"),
      "utf-8"
    )
  );
  let subscriptions = [];
  if (frequency) {
    subscriptions = currentFileData.filter(
      (item) => item.frequency.toLowerCase() == frequency.toLowerCase()
    );

    const prices = subscriptions.map((item) => item.price);
    const totalPrice = prices.reduce((a, b) => a + b, 0);
    const payload = {};
    payload[frequency + "Price"] = totalPrice.toFixed(2);
    res.json(payload);
  } else {
    monthlySubscriptions = currentFileData.filter(
      (item) => item.frequency.toLowerCase() == "monthly"
    );
    annualSubscriptions = currentFileData.filter(
      (item) => item.frequency.toLowerCase() == "annually"
    );
    const monthlyPrices = monthlySubscriptions.map((item) => item.price);
    const annuallyPrices = annualSubscriptions.map((item) => item.price);
    const totalMonthlyPrice = monthlyPrices.reduce((a, b) => a + b, 0);
    const totalAnnualPrice = annuallyPrices.reduce((a, b) => a + b, 0);
    res.json({
      monthlyPrice: totalMonthlyPrice.toFixed(2),
      annualPrice: totalAnnualPrice.toFixed(2),
    });
  }
});

app.get("/subscriptions/:id", (req, res) => {
  const currentFileData = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "jsonfiles/subscriptions.json"),
      "utf-8"
    )
  );

  res.json(
    currentFileData.find((param) => param.id === parseInt(req.params.id))
  );
});

app.get("/subscriptions", (req, res) => {
  const currentFileData = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "jsonfiles/subscriptions.json"),
      "utf-8"
    )
  );
  //Added Timeout to mimic network delay
  setTimeout(() => {
    res.json(currentFileData);
  }, 5000);
});

app.post("/subscriptions", (req, res) => {
  const { data } = req.body;
  let subscriptionId = null;

  const currentFileData = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "jsonfiles/subscriptions.json"),
      "utf-8"
    )
  );
  currentIds = currentFileData.map((item) => item.id);
  maxId = Math.max(...currentIds);
  subscriptionId = maxId + 1;

  const newSubscription = {
    id: subscriptionId,
    name: data.name,
    description: data.description,
    price: +data.price,
    frequency: data.frequency,
    updated_at: moment().format("MM/DD/YYYY"),
    created_at: moment().format("MM/DD/YYYY"),
  };

  const updatedsubscriptionsFileData = [...currentFileData, newSubscription];

  fs.writeFileSync(
    path.join(__dirname, "jsonfiles/subscriptions.json"),
    JSON.stringify(updatedsubscriptionsFileData),
    "utf-8"
  );

  res.json({
    data: newSubscription,
  });
});

//Update subscription
app.patch("/subscription/:id", (req, res) => {
  const { updatedData } = req.body;
  const subscriptionId = req.params.id;
  const currentFileData = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "jsonfiles/subscriptions.json"),
      "utf-8"
    )
  );
  const currentSubscription = currentFileData.filter(
    (item) => item.id == subscriptionId
  )[0];
  const otherSubscriptions = currentFileData.filter(
    (item) => item.id != subscriptionId
  );

  const updatedSubscription = {
    ...currentSubscription,
    name: updatedData.name
      ? updatedData.name
      : currentSubscription.name
      ? currentSubscription.name
      : null,

    description: updatedData.description
      ? updatedData.description
      : currentSubscription.description
      ? currentSubscription.description
      : null,
    price: updatedData.price ? +updatedData.price : 0,
    frequency: updatedData.frequency
      ? updatedData.frequency
      : currentSubscription.frequency
      ? currentSubscription.frequency
      : null,
    updated_at: moment().format("MM/DD/YYYY"),
  };

  const updatedsubscriptionsFileData = [
    ...otherSubscriptions,
    updatedSubscription,
  ].sort((a, b) => (a.id > b.id ? 1 : -1));

  fs.writeFileSync(
    path.join(__dirname, "jsonfiles/subscriptions.json"),
    JSON.stringify(updatedsubscriptionsFileData)
  );

  res.json({
    data: updatedSubscription,
  });
});

//Delete Function
app.delete("/subscription", (req, res) => {
  const { subscriptionIds } = req.body;

  const currentFileData = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "jsonfiles/subscriptions.json"),
      "utf-8"
    )
  );

  const otherSubscriptions = currentFileData.filter(
    (item) => !subscriptionIds.includes(item.id)
  );

  const updatedsubscriptionsFileData = [...otherSubscriptions];

  fs.writeFileSync(
    path.join(__dirname, "jsonfiles/subscriptions.json"),
    JSON.stringify(updatedsubscriptionsFileData)
  );

  res.json({
    data: null,
    message: "Deleted Sucessfully",
  });
});

app.get("/api/images/:id", (req, res) => {
  const imageData = imageInfo.find(
    (param) => param.subscriptionId === parseInt(req.params.id)
  );
  if (imageData) {
    res.json(
      imageInfo.find(
        (param) => param.subscriptionId === parseInt(req.params.id)
      )
    );
  } else {
    res.status(404).send("Image not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
