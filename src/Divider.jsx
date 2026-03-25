import { useState } from "react";

function Divider() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  function handleCalculate() {
    setResult(number);
  }

  // ERRO ACONTECE DURANTE O RENDER
  if (result == 0) {
    throw new Error("Divisão por zero!");
  }

  return (
    <div>
      <h2>Dividir 100 por um número</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={handleCalculate}>Calcular</button>

      {result && <p>Resultado: {100 / result}</p>}
    </div>
  );
}

export default Divider;
