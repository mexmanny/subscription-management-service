import React from "react";
import { useParams } from "react-router-dom";

import SideBar from "../../components/SideBar";

import { CurrentSubscriptionContainer, EditPageContainer } from "./style";

import Main from "../../components/Layout/Main";
import UpdateSubscriptionCard from "../../components/UpdateSubscriptionCard";
import { Helmet } from "react-helmet";

function EditPage() {
  const { id } = useParams();

  return (
    <Main>
      <div key={id} style={{ backgroundColor: "#313131" }}>
        <EditPageContainer>
          <Helmet>
            <title>Manage Subscription</title>
          </Helmet>
          <SideBar></SideBar>
          <CurrentSubscriptionContainer>
            <h1>Manage Subscription</h1>
            <UpdateSubscriptionCard></UpdateSubscriptionCard>
          </CurrentSubscriptionContainer>
        </EditPageContainer>
      </div>
    </Main>
  );
}

export default EditPage;
