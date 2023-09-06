import React from "react";
import NotFoundImg from "../../assets/browser-error-404-icon.svg";

import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="not-found">
      <img src={NotFoundImg} alt="Not Found" />
      <p>Ruta nu exista. 404</p>
      <button onClick={handleRedirect}>Inapoi la pagina principala!</button>
    </div>
  );
}
