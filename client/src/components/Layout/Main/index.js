import React from "react";
import BreadCrumbs from "../../BreadCrumbs";

function Main({ children }) {
  return (
    <>
      <BreadCrumbs />
      {children}
    </>
  );
}

export default Main;
