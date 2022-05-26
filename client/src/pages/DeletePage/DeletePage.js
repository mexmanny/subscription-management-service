import React from "react";
import { useParams } from "react-router-dom";
import SubscriptionCard from "../../components/SubscriptionCard";
import SubscriptionUpdate from "../../components/CurrentSubscriptionCard";
import Main from "../../components/Layout/Main";

function DeletePage() {
  const { id } = useParams();
  return (
    <Main>
      <div key={id}>
        <SubscriptionUpdate></SubscriptionUpdate>
      </div>
    </Main>
  );
}

export default DeletePage;
