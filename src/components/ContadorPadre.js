import React, { useState } from "react";

const BotonIncrementar = ({ onIncrementar }) => (
  <button onClick={onIncrementar}>Incrementar</button>
);

const BotonDecrementar = ({ onDecrementar }) => (
  <button onClick={onDecrementar}>Decrementar</button>
);

const MostrarContador = ({ count }) => <h2>Contador: {count}</h2>;

const ContadorPadre = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => setCount(count - 1);

  return (
    <div>
      <MostrarContador count={count} />
      <BotonIncrementar onIncrementar={incrementar} />
      <BotonDecrementar onDecrementar={decrementar} />
    </div>
  );
};

export default ContadorPadre;
