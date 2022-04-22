import { useContext, useState } from "react";
import { Context } from "./context/context";


export const CounterDummy = () => {
  const { number } = useContext(Context)
  
  const [counter, setCounter] = useState(number);

  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero);
  };

  return (
    <>
      <h3>Context</h3>
      <span>{counter}</span>
      <br />
      <button onClick={() => incrementar()}>
        +1
      </button>
    </>
  );
};
