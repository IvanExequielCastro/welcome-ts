import { useState } from 'react';
import { Timer } from './timer';

export const Chronometer = () => {
  // const [millisegundos, setMillisegundos] = useState(1000);
  const [millisegundos, setMillisegundos] = useState<number>(1000);

  return (
    <>
      <h3>UseEffect</h3>
      <span>Intervalo: {millisegundos}</span>
      <div>
        <button onClick={() => setMillisegundos(1000)}>
          1000
        </button>
        <button onClick={() => setMillisegundos(2000)}>
          2000
        </button>
      </div>

      <Timer milisegundos={millisegundos} />
    </>
  );
};
