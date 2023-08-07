import React from "react";
import MenuItem from "./MenuItem";
import { menuConfig } from "../data/menu";

function Menu() {
  return (
    <div>
      {menuConfig.map((tab, index) => {
        return <MenuItem key={index} name={tab.name} />;
      })}
    </div>
  );
}

export default Menu;
