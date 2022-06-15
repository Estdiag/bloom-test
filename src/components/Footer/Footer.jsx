import React from 'react';
import Button from '../Button/Button';
import styles from './footer.module.css';
import linkedin from '../../images/linkedin.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import youtube from '../../images/youtube.png';
import bloom from '../../images/bloom.png';

const Footer = () => {
  return (
    <nav>
      <div className={styles.div_about_us}>
        <div className={styles.div_line}>
          <div className={styles.div_margin}>
            <a href="#pablo">
              Quienes somos
            </a>
          </div>
          <div className={styles.div_margin}>
            <a  href="#pablo">
              Recursos
            </a>
          </div>
          <div className={styles.div_margin}>
            <a  href="#pablo">
              Empleos
            </a>
          </div>
          <div className={styles.div_margin}>
            <a href="#pablo">
              FAQ
            </a>
          </div>
        </div>
        <div>
          <div className={styles.div_margin}>
            <a  href="#pablo">
              Contactanos
            </a>
          </div>
          <div className={styles.div_margin}>
            <a  href="#pablo">
              Boletines
            </a>
          </div>
        </div>
      </div>
      <div className={styles.div_contact}>
        <h3 >¿Quieres estar actualizado?</h3>
        <input
          type="email"
          className={styles.input}
          placeholder="example@hello.com"
        />
        <Button text="Inscríbite" />
        <h5>
          Al hacer click en el botón “inscríbete” aceptas nuestra{' '}
          <a href="#pablo" className={styles.h5_a}>
            Política de Tratamiento de Datos
          </a>
        </h5>
      </div>
      <div>
        <h4>Siguenos en nuestras redes</h4>
        <div className={styles.div_social_networks}>
          <ul>
            <a
              href="https://www.linkedin.com/company/bloom-crowdfunding"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="icono de linkedin" />
            </a>
            <a
              href="https://www.facebook.com/company/bloom-crowdfunding"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="icono de facebook" />
            </a>
            <a
              href="https://www.instagram.com/company/bloom-crowdfunding"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="icono de instagram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCapJ27E2NAJtb7-l2kyM4mQ"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtube} alt="icono de youtube" />
            </a>
          </ul>
        </div>
        <div className={styles.div_monitored}>
          <h4>Vigilados por:</h4>
          <img src={bloom} alt="logo de bloom crowdfunding" />
        </div>
      </div>
      <div>
        <h6>{`© ${new Date().getFullYear()} Bloom Crowdfunging S.A.C, todos los derechos reservados`}</h6>
      </div>
    </nav>
  );
};

export default Footer;
