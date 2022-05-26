import React from "react";
import { NavBarContainer } from "./style";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function SideBar(props) {
  return (
    <NavBarContainer>
      <Link to="/subscriptions">
        <FaHome style={{ marginRight: "4px" }} />
        Home
      </Link>
    </NavBarContainer>
  );
}

export default SideBar;
