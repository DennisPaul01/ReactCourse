import React from "react";

import collectionData from "../data/collectionData.json";

import { useParams } from "react-router-dom";

export default function DescriptionRoute() {
  const { facultyId } = useParams();

  const dataHistory = collectionData.department?.filter(
    (faculty) => faculty.name === facultyId
  )[0].description;

  return (
    <div>
      <h1>Descriere:</h1>
      <p>{dataHistory}</p>
    </div>
  );
}
