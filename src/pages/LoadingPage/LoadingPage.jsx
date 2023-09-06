import React from "react";

import { ColorRing } from "react-loader-spinner";

export default function LoadingPage() {
  return (
    <div className="loading-page">
      <div className="spinner-container">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#e15b64", "#e15b64", "#e15b64", "#e15b64"]}
        />
      </div>
    </div>
  );
}
