import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Header.css";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input placeholder="Search for artists,songs" type="text" />
      </div>
      <div className="header__right">
        <Avatar src="" alt="SD" />
        <h4>Shubham Dalal</h4>
      </div>
    </div>
  );
}

export default Header;
