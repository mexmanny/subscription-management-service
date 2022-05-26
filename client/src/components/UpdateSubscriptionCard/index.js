import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UpdateSubscriptionCardForm from "../UpdateSubscriptionForm";
import { getSubscriptionById } from "../../controllers/SubscriptionsController";
import { useQuery } from "react-query";
import { FaFileInvoice } from "react-icons/fa";

import {
  UpdateSubscriptionCardContainer,
  UpdateSubscriptionCardStyle,
} from "./style";

function UpdateSubscriptionCard(props) {
  const { id } = useParams();
  const [displayForm, setDisplayForm] = useState(false);

  const { data } = useQuery(
    ["subscriptionData", [props.subscription ? props.subscription.id : id]],
    !props.subscription
      ? async () => {
          const queryDataSubscription = await getSubscriptionById(id);
          return queryDataSubscription;
        }
      : async () => {
          return props.subscription;
        }
  );

  if (data) {
    return (
      <div key={props.id}>
        <UpdateSubscriptionCardContainer>
          <UpdateSubscriptionCardStyle>
            <h4>Current Subscription Information</h4>
            <FaFileInvoice
              style={{ fontSize: "42px", color: "darkslategray" }}
            />
            <h2>{data.name}</h2>
            <h3>
              {data.price}/{data.frequency}
            </h3>
            <p>
              <span className="bold-text">Member Since:</span>
              {data.created_at}
            </p>
            <p>
              <span className="bold-text">Last Updated:</span> {data.updated_at}
            </p>
            <UpdateSubscriptionCardForm
              data={data}
              trigger={displayForm}
              onClose={() => setDisplayForm(false)}
            ></UpdateSubscriptionCardForm>
            <button onClick={() => setDisplayForm(true)}>
              Update Subscription
            </button>
          </UpdateSubscriptionCardStyle>
        </UpdateSubscriptionCardContainer>
      </div>
    );
  } else {
    return null;
  }
}

export default UpdateSubscriptionCard;
