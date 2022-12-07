import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./props/navbar";
import Inicio from "./paginas/inicio";
import Productos from "./paginas/productos";
import Contacto from "./paginas/contacto";
import Id1 from "./paginas/detallesproductos/id1";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/productos/id1" element={<Id1/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
