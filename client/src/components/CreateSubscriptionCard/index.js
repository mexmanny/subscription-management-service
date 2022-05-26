import React from "react";
import { CreateFormContainer, CreateFormStyle } from "./style";
import { useNavigate } from "react-router-dom";
import { createSubscription } from "../../controllers/SubscriptionsController";

function CreateSubscriptionCard() {
  const navigate = useNavigate();
  const handleCreateSubscription = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const payload = {
      name: e.target.subscription_name.value,
      description: e.target.description.value,
      price: e.target.subscription_price.value,
      frequency: e.target.frequency.value,
    };
    await createSubscription(payload);
    navigate("/subscriptions", { replace: true });
  };

  return (
    <CreateFormContainer>
      <CreateFormStyle>
        <h3>Create New Subscription</h3>

        <form onSubmit={handleCreateSubscription}>
          <input
            type="text"
            name="subscription_name"
            placeholder="Subscription Name"
            required
          ></input>
          <input
            type="text"
            name="subscription_price"
            placeholder="Price"
            required
          ></input>
          <h4>Frequency</h4>
          <div className="billingType">
            <label htmlFor="anually">
              <input
                type="radio"
                name="frequency"
                defaultChecked={true}
                value="Annually"
                id="anually"
              />
              Annually
            </label>

            <label htmlFor="monthly">
              <input type="radio" name="frequency" value="Monthly" /> Monthly
            </label>
          </div>
          <textarea
            name="description"
            placeholder="Description of subscription"
            rows={3}
          ></textarea>
          <button type="submit">Create</button>
        </form>
      </CreateFormStyle>
    </CreateFormContainer>
  );
}

export default CreateSubscriptionCard;
