import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import collectionData from "../../data/collectionData.json";

export default function FacultyContent() {
  let { facultyId } = useParams();
  //   const [faculty, setFaculty] = useState(null);

  //   useEffect(() => {
  //     const faculty = collectionData.department?.filter(
  //       (faculty) => faculty.name === facultyId
  //     );
  //     setFaculty(faculty[0]);
  //   }, []);

  const faculty = collectionData.department?.filter(
    (faculty) => faculty.name === facultyId
  )[0];

  return (
    <div className="faculties">
      <h1>Nume:{faculty?.name}</h1>
      <p>Description: {faculty?.description}</p>
    </div>
  );
}
