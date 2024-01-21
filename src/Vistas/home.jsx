// Home.jsx
import React, { useState } from 'react';
import Layout from '../components/layout';
import Plato1 from '../assets/imagenes/descarga.jpg'
import Plato2 from '../assets/imagenes/img2.jpg'
import Plato3 from '../assets/imagenes/img3.jpg'
import Plato4 from '../assets/imagenes/img4.jpg'
import Plato5 from '../assets/imagenes/img5.jpg'
import Plato6 from '../assets/imagenes/img6.jpg'

import './home.css'; // Importa el archivo CSS

const Home = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPlato, setSelectedPlato] = useState(null);
  
    const openModal = (plato) => {
      setSelectedPlato(plato);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedPlato(null);
      setModalOpen(false);
    };
  return (
    <Layout>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido al Restaurante de Comida China</h1>
          <p>Descubre la auténtica experiencia de la cocina china en nuestro restaurante.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>Acerca de Nosotros</h2>
          <p>
            Somos un restaurante comprometido a ofrecer platos de alta calidad con ingredientes frescos y auténticos.
          </p>
          <p>
            Nuestros chefs expertos combinan técnicas tradicionales chinas con un toque moderno para brindarte una experiencia culinaria única.
          </p>
        </div>
      </section>

      <section className="menu-section">
        <div className="menu-content">
          <h2>Nuestro Menú</h2>
          <div className="menu-item" onClick={() => openModal({ name: 'Nombre del Plato 1', description: 'Descripción del plato 1 y detalles.', image: Plato1 })}>
            <img src={Plato1} alt="Plato 1" />
            <h3>Nombre del Plato 1</h3>
            <p>Descripción del plato y detalles.</p>
          </div>
          <div className="menu-item" onClick={() => openModal({ name: 'Nombre del Plato 2', description: 'Descripción del plato 2 y detalles.', image: Plato2 })}>
            <img src={Plato2} alt="Plato 2" />
            <h3>Nombre del Plato 2</h3>
            <p>Descripción del plato y detalles.</p>
          </div>
          {/* Agrega más elementos según sea necesario */}
        </div>
      </section>

      {/* ... (secciones posteriores) ... */}

      {/* Modal para mostrar detalles del plato */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedPlato.image} alt={selectedPlato.name} />
            <h2>{selectedPlato.name}</h2>
            <p>{selectedPlato.description}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Home;
