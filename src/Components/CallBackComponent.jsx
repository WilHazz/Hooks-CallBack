import { useState } from "react";
import { Incrementar } from "./Incrementar";

export const CallBackComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementarPadre = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>contador: </h1>
      <Incrementar incrementar={incrementarPadre}></Incrementar>
    </>
  );
};
