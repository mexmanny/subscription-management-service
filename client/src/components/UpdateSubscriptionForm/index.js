import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CloseButton,
  SubscriptionFormContainer,
  SubscriptionFormStyle,
} from "./style";
import { updateSubscription } from "../../controllers/SubscriptionsController";

function UpdateScriptionForm(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState(props.data ? props.data.name : "");
  const [frequency, setFrequency] = useState(
    props.data ? props.data.frequency : ""
  );
  const [price, setPrice] = useState(props.data ? props.data.price : "");
  const [description, setDescription] = useState(
    props.data ? props.data.description : ""
  );

  useEffect(() => {
    setFrequency(props.data ? props.data.frequency : "");
    setDescription(props.data ? props.data.description : "");
    setPrice(props.data ? props.data.price : "");
    setName(props.data ? props.data.name && props.data.name : "");
  }, [props.data]);

  const handleUpdateSubscription = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const payload = {
      description: e.target.description.value,
      price: e.target.subscription_price.value,
      frequency: e.target.frequency.value,
      name: e.target.subscription_name.value,
    };
    await updateSubscription(id, payload);
    navigate("/", { replace: true });
  };

  return props.trigger ? (
    <SubscriptionFormContainer>
      <SubscriptionFormStyle>
        <h3>Update Subscription Information</h3>
        <CloseButton onClick={() => props.onClose()}>X</CloseButton>

        <form onSubmit={handleUpdateSubscription}>
          <input
            type="text"
            name="subscription_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Subscription Name"
            optional
          ></input>
          <input
            type="text"
            name="subscription_price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
          ></input>
          <h4>Frequency</h4>
          <div className="billingType">
            <label for="anually">
              <input
                type="radio"
                name="frequency"
                defaultChecked={frequency.toLowerCase() === "annually"}
                value="Annually"
                id="anually"
              />
              Annually
            </label>

            <label for="monthly">
              <input
                type="radio"
                name="frequency"
                value="Monthly"
                defaultChecked={frequency.toLowerCase() === "monthly"}
              />{" "}
              Monthly
            </label>
          </div>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description of subscription"
            rows={3}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </SubscriptionFormStyle>
    </SubscriptionFormContainer>
  ) : (
    ""
  );
}

export default UpdateScriptionForm;
