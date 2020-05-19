import React from "react";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        marginTop: "20%",
      }}
    >
      <i class="fas fa-spinner fa-spin fa-5x"></i>
    </div>
  );
}
