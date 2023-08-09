import React from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main";
import Paper from "./views/Card/Card";

import university from "./assets/university.png";
import icon1 from "./assets/heroicons-solid_pencil-alt.png";
import icon2 from "./assets/heroicons-solid_trash.png";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
