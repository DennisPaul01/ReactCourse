import React, { Suspense, lazy, useEffect } from "react";

import Sidebar from "./components/Sidebar/Sidebar";

import { Routes, Route } from "react-router-dom";

import DescriptionRoute from "./views/DescriptionRoute";
import HistoryRoute from "./views/HistoryRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { useDispatch } from "react-redux";
import { fetchCities, fetchTutors } from "./redux/operations";

const LazyFacultyPage = lazy(() =>
  import("./pages/FacultiesPage/FacultiesPage")
);

const LazyMainPage = lazy(() => import("./components/Main"));

const LazyFacultyContent = lazy(() =>
  import("./views/FacultyContent/FacultyContent")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTutors());
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div className="layout">
      <Sidebar />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<LazyMainPage />} />
          <Route path="/universities" element={<LazyMainPage />} />
          <Route path="/faculties" element={<LazyFacultyPage />} />

          <Route path="/faculties/:facultyId" element={<LazyFacultyContent />}>
            <Route path="description" element={<DescriptionRoute />} />
            <Route path="history" element={<HistoryRoute />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
