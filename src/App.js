import React from "react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Card from "./components/Card";

import university from "./assets/university.png";
import icon1 from "./assets/heroicons-solid_pencil-alt.png";
import icon2 from "./assets/heroicons-solid_trash.png";

function App() {
  return (
    <div>
      <Sidebar />
      <Main />
      <Card>
        <img src={university} alt="University" width="100" />
        <p>University</p>
        <p>MIT</p>
        <div>
          <button>
            <img src={icon1} alt="icon1" width="50" />
          </button>
          <button>
            <img src={icon2} alt="icon2" width="50" />
          </button>
        </div>
      </Card>
    </div>
  );
}

export default App;
