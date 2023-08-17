import React from "react";
import Card from "../views/Card/Card";

import collectionData from "../data/collectionData.json";
import Tutors from "../views/Tutors/Tutors";
import Cities from "../views/Cities/Cities";
import Faculties from "../views/Faculties/Faculties";
import Description from "../views/Description/Description";

export default function Main() {
  return (
    <div>
      <div className="univ">
        <Card />
        <Description />
      </div>
      <Tutors data={collectionData.tutors} />
      <Cities data={collectionData.cities} />
      <Faculties faculties={collectionData.department} />
    </div>
  );
}
