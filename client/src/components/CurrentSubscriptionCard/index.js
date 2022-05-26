import React from "react";
import { useParams } from "react-router-dom";
import { CurrentSubscriptionStyle, SubscriptionContainer } from "./style";
import { getSubscriptionById } from "../../controllers/SubscriptionsController";
import { useQuery } from "react-query";

function CurrentSubscriptionCard(props) {
  const { id } = useParams();

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
        <SubscriptionContainer>
          <CurrentSubscriptionStyle>
            <h4>Current Subscription</h4>
            <h2>{data.name}</h2>
            <h3>{data.description}</h3>
            <ul>
              <li>
                <span className="amount">{data.price}</span> /{data.frequency}
              </li>
              <li>
                <span className="bold">Member Since: </span>
                {data.created_at}
              </li>
              <li>
                <span className="bold">Last Updated: </span>
                {data.updated_at}
              </li>
            </ul>
          </CurrentSubscriptionStyle>
        </SubscriptionContainer>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
}

export default CurrentSubscriptionCard;
