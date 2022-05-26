import React from "react";
import { useParams } from "react-router-dom";
import CurrentSubscriptionCard from "../../components/CurrentSubscriptionCard";
import Main from "../../components/Layout/Main";
import { Helmet } from "react-helmet";
function DetailsPage() {
  const { id } = useParams();
  return (
    <Main>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          backgroundColor: "midnightblue",
        }}
      >
        <Helmet>
          <title>Subscription Details</title>
        </Helmet>

        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
          Subscription Details
        </h1>
        <CurrentSubscriptionCard key={id}></CurrentSubscriptionCard>
      </div>
    </Main>
  );
}

export default DetailsPage;
