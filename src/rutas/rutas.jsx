import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Vistas/home";
import Layout from "../components/layout";


const Rutas = () => {
  return (
    <BrowserRouter>
    <Layout/>
    <Routes>
      <Route path="/" element={<Home />}>
       
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default Rutas;
