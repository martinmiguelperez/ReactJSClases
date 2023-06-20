import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/pages/home/Home";
import Cart from "./components/pages/cart/Cart";
import ItemList from "./components/pages/itemList/ItemList";
import { useState } from "react";

function App() {
  const [saludo, setSaludo] = useState("Hola como estas");

  const cambiarSaludo = (nuevoSaludo) => {
    setSaludo(nuevoSaludo);
  };

  return (
    <div>
      <Navbar />
      <Home nombre={"Juancito"} apellido={"Perez"} />
      <Cart />
      <ItemList saludo={saludo} cambiarSaludo={cambiarSaludo} />

      <Footer />
    </div>
  );
}

export default App;
