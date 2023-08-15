import React from "react";
import MenuItem from "./MenuItem";
import { menuConfig } from "../data/menu";

function Menu() {
  return (
    <div className="tabs">
      {menuConfig.map((tab, index) => {
        return (
          <div key={index} className="tabs__tab">
            {tab.icon}
            <MenuItem name={tab.name} />
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
