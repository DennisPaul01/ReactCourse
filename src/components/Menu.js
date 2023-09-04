import React from "react";
import MenuItem from "./MenuItem";
import { menuConfig } from "../data/menu";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="tabs">
      {menuConfig.map((tab, index) => {
        return (
          <NavLink key={index} to={tab.name}>
            <div className="tabs__tab">
              {tab.icon}
              <MenuItem name={tab.name} />
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Menu;
