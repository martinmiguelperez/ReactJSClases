const itemList = ({ saludo, cambiarSaludo }) => {
  return (
    <div>
      <h2>{saludo}</h2>
      <button onClick={() => cambiarSaludo("Bien")}> Cambiar Saludo</button>
    </div>
  );
};

export default itemList;
