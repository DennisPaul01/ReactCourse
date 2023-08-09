import React from "react";
import MenuItem from "./MenuItem";
import { menuConfig } from "../data/menu";

function Menu() {
  return (
    <div className="tabs">
      {menuConfig.map((tab, index) => {
        return (
          <div className="tabs__tab">
            {tab.icon}
            <MenuItem key={index} name={tab.name} />
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
