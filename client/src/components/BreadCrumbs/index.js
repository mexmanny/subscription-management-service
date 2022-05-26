import React from "react";
import { useLocation } from "react-router-dom";
import { BreadCrumbsContainer } from "./style";
function BreadCrumbs() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <BreadCrumbsContainer>
      <a href="/">Home</a>
      {">"}
      <a href="/subscriptions">Subscriptions</a>
      {currentPath !== "/" && currentPath !== "/subscriptions" && ">"}
      {currentPath.includes("/edit") && "Edit Subscription"}
      {currentPath.includes("/details") && "Subscription details"}
      {currentPath.includes("/quick-glance") && " Quick-Glance"}
    </BreadCrumbsContainer>
  );
}

export default BreadCrumbs;
