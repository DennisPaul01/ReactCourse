import React from "react";
import { Link } from "react-router-dom";
import collectionData from "../../data/collectionData.json";
import Paper from "../../components/Paper/Paper";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import { Outlet } from "react-router-dom";

export default function FacultiesPage() {
  return (
    <div className="faculties">
      <Outlet />
      {collectionData.department?.map((faculty) => {
        return (
          <Link key={faculty.id} to={`/Faculties/${faculty.name}`}>
            <Paper>
              <InfoBlock id={faculty.id} info={faculty.name} />
            </Paper>
          </Link>
        );
      })}
      <Outlet />
    </div>
  );
}
