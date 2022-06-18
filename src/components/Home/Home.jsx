import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import img from './../../images/hombre.jpg';
import search from './../../images/search.png';
import pc from './../../images/pc.png';
import money from './../../images/money.png';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';

const Home = () => {
  return (
    <div className={styles}>
      <Navbar />
      <h2>Este es el primer espacio donde todos avanzamos juntos</h2>
      <p>
        Somos el primer Crowdfundig de Financiación en Perú, donde empresas y
        emprendedores podrán solicitar recursos para un proyecto y todos podemos
        invertir recibiendo una ganancia por nuestros recursos.
      </p>
      <div className={styles.div_button}>
        <Link to="/register">
        <Button text="Inscríbite" />
        </Link>
      </div>
      <div className={styles.div_img}>
        <div className={styles.div_project}>
          <h3 className={styles.div_project_text}>Proyectos con Garantía</h3>
          <p className={styles.div_project_text}>
            Todos los proyectos en nuestra plataforma cuenta con garantía,
            entendiendo que siempre existe un riesgo al momento de invertir.
          </p>
        </div>
        <img
          src={img}
          alt="hombre viendo el celular"
          className={styles.div_project_img}
        />
      </div>
      <div className={styles.div_icons}>
        <div>
          <img src={search} alt="hombre revisando documentacion" />
          <p>Crea una Campaña de Financiación</p>
        </div>
        <div>
          <img src={pc} alt="hombre en su computadora" />
          <p>Invierte en el proyecto que quieras</p>
        </div>
        <div>
          <img src={money} alt="mucho dinero" />
          <p>Recibe una ganancia por tu inversión</p>
        </div>
      </div>
      <h2>¿Esto es legal en Perú?</h2>
      <p>
        Somos una Sociedad Administradora de Plataformas de Financiamiento
        Participativo Financiero, estas son vigiladas por la SMV
        (Superintendencia del Mercado de Valores), actualmente nos encontramos
        en proceso de Solicitud de Permiso de Funcionamiento ante el regulador.
      </p>
      <h2>¿Cuando pedo invertir?</h2>
      <p>
        Por el momento no estamos en funcionamiento, esperamos poder hacer un
        lanzamiento cuando la SMV nos autorice.
      </p>
      <p>
        Estaremos actualizando a todos sobre las fechas de lanzamiento, puedes
        estar atento a nuestras redes o inscribirte a nuestros boletines.
      </p>
      <div className={styles.button}>
        <Button text="Conoce más" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
