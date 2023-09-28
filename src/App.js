import React, { Suspense, lazy, useEffect } from "react";

import Sidebar from "./components/Sidebar/Sidebar";

import { Routes, Route } from "react-router-dom";

import DescriptionRoute from "./views/DescriptionRoute";
import HistoryRoute from "./views/HistoryRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { useDispatch } from "react-redux";
import { fetchCities, fetchFaculties, fetchTutors } from "./redux/operations";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoutes from "./routes/PrivateRoutes";

const LazyFacultyPage = lazy(() =>
  import("./pages/FacultiesPage/FacultiesPage")
);

const LazyMainPage = lazy(() => import("./components/Main"));

const LazyFacultyContent = lazy(() =>
  import("./views/FacultyContent/FacultyContent")
);

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          // rute private
          <Route element={<PrivateRoutes />}>
            <Route path="/universities" element={<LazyMainPage />} />
            <Route path="/faculties" element={<LazyFacultyPage />} />
            <Route
              path="/faculties/:facultyId"
              element={<LazyFacultyContent />}
            >
              <Route path="description" element={<DescriptionRoute />} />
              <Route path="history" element={<HistoryRoute />} />
            </Route>
          </Route>
          // rute private
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
