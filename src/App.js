import React from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main";

import { Routes, Route } from "react-router-dom";

import FacultiesPage from "./pages/FacultiesPage/FacultiesPage";
import FacultyContent from "./views/FacultyContent/FacultyContent";
import DescriptionRoute from "./views/DescriptionRoute";
import HistoryRoute from "./views/HistoryRoute";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/universities" element={<Main />} />
        <Route path="/faculties" element={<FacultiesPage />}>
          <Route path="description" element={<DescriptionRoute />} />
          <Route path="history" element={<HistoryRoute />} />
        </Route>

        <Route path="/faculties/:facultyId" element={<FacultyContent />} />
      </Routes>
    </div>
  );
}

export default App;
