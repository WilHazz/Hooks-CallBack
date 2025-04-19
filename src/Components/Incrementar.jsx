import React from "react";

export const Incrementar = React.memo(({ incrementar }) => {
  console.log("me estoy redibujando");
  return (
    <>
      <button className="btn btn-warning" onClick={() => incrementar(10)}>
        incrementar
      </button>
    </>
  );
});
