import React from "react";

import { Outlet, useParams, useNavigate, Link } from "react-router-dom";
import collectionData from "../../data/collectionData.json";

export default function FacultyContent() {
  let { facultyId } = useParams();
  const navigation = useNavigate();

  const faculty = collectionData.department?.filter(
    (faculty) => faculty.name === facultyId
  )[0];

  const handleBack = () => {
    navigation("/faculties");
  };

  const handleHistoryRoute = () => {
    navigation("history", { state: faculty.history });
  };

  return (
    <div className="faculties">
      <button onClick={handleBack}>Inapoi la faculties!</button>
      <h1>Nume:{faculty?.name}</h1>
      <Link to="description">Click descriere!</Link>
      <Link to="history" state={faculty.history}>
        Click istorie!
      </Link>
      <button onClick={handleHistoryRoute}>To history</button>
      <Outlet />
    </div>
  );
}
