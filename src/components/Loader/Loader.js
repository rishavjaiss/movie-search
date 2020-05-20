import React from "react";

export default function Loader() {
  return (
    <>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          marginTop: "10%",
          color: "white",
        }}
      >
        Getting your results..
      </p>
      <br></br>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          marginTop: "10px",
          color: "white",
        }}
      >
        <i className="fas fa-spinner fa-spin fa-5x"></i>
      </div>
    </>
  );
}
