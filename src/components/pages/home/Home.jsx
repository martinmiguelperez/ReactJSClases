import "./Home.css";
import { useState } from "react";

const Home = ({ nombre, apellido }) => {
  const [contador, setContador] = useState(0);
  const [name, setName] = useState("Pepe");

  const sumar = (num) => {
    setContador(contador + num);
  };
  const sumar2 = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h1>
        {nombre} {apellido}
      </h1>
      <h1>El nombre es {name}</h1>
      <button onClick={() => setName("Maria")}>Cambiar nombre</button>
      <h1>El contador es {contador}</h1>
      <button onClick={() => sumar(15)}>Click para sumar en 15</button>
      <button onClick={sumar2}>Click para sumar en 1</button>
    </>
  );
};

export default Home;
