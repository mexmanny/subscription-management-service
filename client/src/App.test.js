import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import App from "./App";
import { act } from "react-dom/test-utils";

import * as SubscriptionContoller from "./controllers/SubscriptionsController";

//Testing whether a component is present in DOM
test("Renders Breadcrumb Component", () => {
  render(<App />);
  const breadCrumbComponent = screen.getByText(/subscriptions/i);
  expect(breadCrumbComponent).toBeInTheDocument();
});

//Testing add new subscription button click navigation
test("navigate to add subscription page on click", () => {
  render(<App />);

  //Wait for 2 seconds to let API call finish
  setTimeout(async () => {
    //find the add new subscription button
    const addNewButton = await screen.findByText("Add New Subscription");

    //Fire click event on the button
    fireEvent(
      addNewButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // check that the content changed to add new subscription page
    expect(screen.getByText(/create new subscription/i)).toBeInTheDocument();
  }, 2000);
});

//Testing edit subscription button click navigation
test("navigate to edit subscription page on click", () => {
  render(<App />);

  //Wait for 2 seconds to let API call finish
  setTimeout(async () => {
    //find the edit subscription button
    const editButton = await screen.findByText("Edit");

    //Fire click event on the button
    fireEvent(
      editButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // check that the content changed to add new subscription page
    expect(screen.getByText(/manage subscription/i)).toBeInTheDocument();
  }, 2000);
});

//Testing delete subscription button click navigation
test("handle delete subscription flow on click", () => {
  render(<App />);

  //Wait for 2 seconds to let API call finish
  setTimeout(async () => {
    //find the delete subscription button
    const deleteButton = await screen.findByText("Delete");

    //Fire click event on the button
    fireEvent(
      deleteButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // check that the content changed to add new subscription page
    expect(screen.getByText(/add new subscription/i)).toBeInTheDocument();
  }, 2000);
});

//Testing update subscription button click navigation
test("navigate to subscriptions list on update click and succesful update", () => {
  render(<App />);

  //Wait for 2 seconds to let API call finish
  setTimeout(async () => {
    //find the edit subscription button
    const editButton = await screen.findByText("Edit");

    //Fire click event on the button
    fireEvent(
      editButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // check that the content changed to add new subscription page
    expect(screen.getByText(/manage subscription/i)).toBeInTheDocument();

    //find the update subscription button
    const updateButton = await screen.findByText("Update subscription");

    //Fire click event on the button
    fireEvent(
      updateButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // check that the content changed to add new subscription page
    expect(screen.getByText(/add new subscription/i)).toBeInTheDocument();
  }, 2000);
});

//Testing update subscription button click navigation
test("navigate to subscriptions list on clicking home in sidebar", () => {
  render(<App />);

  //Wait for 2 seconds to let API call finish
  setTimeout(async () => {
    //find the edit subscription button
    const editButton = await screen.findByText("Edit");

    //Fire click event on the button
    fireEvent(
      editButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // check that the content changed to add new subscription page
    expect(screen.getByText(/manage subscription/i)).toBeInTheDocument();

    //find the update subscription button
    const homeButton = await screen.findByText("Home");

    //Fire click event on the button
    fireEvent(
      homeButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // check that the content changed to add new subscription page
    expect(screen.getByText(/add new subscription/i)).toBeInTheDocument();
  }, 2000);
});

//Testing if a method was called
test("getSubscriptions was called", async () => {
  //Register spy for subscription method
  const calledSpy = jest.spyOn(SubscriptionContoller, "getSubscriptions");

  //Render App component - The method in question is called from SubscriptionList component
  render(<App />);

  //Assert whether the method was called
  expect(calledSpy).toHaveBeenCalled();
});

//Testing if a method was called
test("deleteSubscription was called", async () => {
  //Register spy for subscription method
  const calledSpy = jest.spyOn(SubscriptionContoller, "deleteSubscription");

  //Render App component - The method in question is called from SubscriptionCard component on delete click
  render(<App />);

  //Wait for 2 seconds to let API call finish
  setTimeout(async () => {
    //find the delete subscription button
    const deleteButton = await screen.findByText("Delete");

    //Fire click event on the button
    fireEvent(
      deleteButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    //Assert whether the method was called
    expect(calledSpy).toHaveBeenCalled();
  }, 2000);
});

//Testing if a method was called
test("updateSubscription was called", async () => {
  //Register spy for subscription method
  const calledSpy = jest.spyOn(SubscriptionContoller, "updateSubscription");

  //Render App component - The method in question is called from SubscriptionCard component on delete click
  render(<App />);

  //Wait for 2 seconds to let API call finish
  setTimeout(async () => {
    //find the edit subscription button
    const editButton = await screen.findByText("Edit");

    //Fire click event on the button
    fireEvent(
      editButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // check that the content changed to add new subscription page
    expect(screen.getByText(/manage subscription/i)).toBeInTheDocument();

    //find the update subscription button
    const updateButton = await screen.findByText("Update subscription");

    //Fire click event on the button
    fireEvent(
      updateButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    //Assert whether the method was called
    expect(calledSpy).toHaveBeenCalled();
  }, 2000);
});

//Testing if a method was called
test("createSubscription was called", async () => {
  //Register spy for subscription method
  const calledSpy = jest.spyOn(SubscriptionContoller, "createSubscription");

  //Render App component - The method in question is called from SubscriptionCard component on delete click
  render(<App />);

  //Wait for 2 seconds to let API call finish
  setTimeout(async () => {
    //find the edit subscription button
    const addNewButton = await screen.findByText("Add New Subscription");

    //Fire click event on the button
    fireEvent(
      addNewButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    //find the update subscription button
    const createButton = await screen.findByText("Create Subscription");

    //Fire click event on the button
    fireEvent(
      createButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    //Assert whether the method was called
    expect(calledSpy).toHaveBeenCalled();
  }, 2000);
});
