import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  // const incrementar = ( numero ):void => {
  // const incrementar = ( numero:any ):void => {
  // const incrementar = ( numero = 1 ):void => {
  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero);
  };

  return (
    <>
      <h3>UseState</h3>
      <span>{counter}</span>
      <br />
      <button onClick={() => incrementar()}>
        +1
      </button>
    </>
  );
};

/* ---------------------------------------------- */

/**
 * Cumple la funcion de las struct de Golang
 * 
 * Ejemplo:
 * type Duration struct {
 *   Months int `json:"months"`
 *   Years  int `json:"years"`
 * }
 * 
 */
interface Item {
  icon: string;
  text: string;
};


export const Items = () => {

  // const [item, setItem] = useState();
  // const [item, setItem] = useState<Item>({
  //   icon: '',
  //   text: '',
  // });
  const [item, setItem] = useState<Item>();

  const getItems = () => {
    setItem(
      {
        icon: 'cash',
        text: 'Lorem Ipsum is simply dummy text',
      },
      // {
      //   icon: 'bank',
      //   text: 'Lorem Ipsum is simply dummy text',
      //   type: 'success',
      // },
    );
  };

  return (
    <>
      <h3>UseState con interface</h3>
      <button onClick={getItems}>
        Get Items
      </button>

      {
        (!item)
          ? <pre> No hay items </pre>
          : <pre> {JSON.stringify(item)} </pre>
      }
    </>
  );
};
