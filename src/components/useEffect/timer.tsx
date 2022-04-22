import { useEffect, useRef, useState } from 'react';

/**
 * Es exactamente lo mismo que las struct de Golang
 * 
 * Ejemplo:
 * type Duration struct {
 *   Months int `json:"months"`
 *   Years  int `json:"years"`
 * }
 * 
 */
type TimerArgs = {
  milisegundos: number
}

export const Timer = ({ milisegundos }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos);
  }, [milisegundos]);

  return (
    <>
      <h4>Timer: <small>{segundos}</small></h4>
    </>
  );
};
