import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import Input from '../Input/Input';
import Switch from '../Switch/Switch';
import Button from '../../Button/Button';
import Footer from '../../Footer/Footer';
import styles from './registrationForm.module.css';
import styleInput from '../Input/input.module.css';

const RegistrationForm = () => {
  const URL =
    'https://72fc7xa4pk.execute-api.us-east-2.amazonaws.com/prueba/api/v2/portal/dev-test';

  const data = {
    name: '',
    email: '',
    cellphone: '',
    acceptsPolicies: true,
    interestedInInvesting: false,
    interestedInBorrowing: false,
  };
  const [acceptsPolicies, setAcceptsPolicies] = useState(false);
  const [registrationInformation, setRegistrationInformation] = useState(data);
  const [error, setError] = useState('');

  const handleOnChange = e => {
    if (e.target.value === 'interestedInInvesting') {
      setRegistrationInformation({
        ...registrationInformation,
        interestedInInvesting: true,
        interestedInBorrowing: false,
      });
    } else if (e.target.value === 'interestedInBorrowing') {
      setRegistrationInformation({
        ...registrationInformation,
        interestedInInvesting: false,
        interestedInBorrowing: true,
      });
    } else {
      setRegistrationInformation({
        ...registrationInformation,
        [e.target.name]: e.target.value,
      });
    }
  };

  const sendData = e => {
    e.preventDefault();
    setError('');
    if (acceptsPolicies) {
      axios.post(URL, registrationInformation).then(res => {
        console.log(res);
      });
      setRegistrationInformation(data);
      alert('Gracias por registrarte, nos estaremos contactando');
    } else {
      setError('acepte las politicas');
    }
  };
  return (
    <>
      <Navbar />
      <form onSubmit={e => sendData(e)}>
        <div className={styles.container}>
          <h1>Deja tus datos y recibe actualizaciones</h1>

          <div>
            <Input
              id="name"
              type="text"
              text="Nombre completo"
              onChange={handleOnChange}
              value={registrationInformation.name}
            />
            <Input
              id="email"
              type="email"
              text="Correo electronico"
              onChange={handleOnChange}
              value={registrationInformation.email}
            />
            <Input
              id="cellphone"
              type="number"
              text="Numero de celular"
              onChange={handleOnChange}
              value={registrationInformation.cellphone}
            />
            <div className={styleInput.container}>
              <div className={styleInput.div_label}>
                <label htmlFor="typeInfo">
                  ¿Qué información quieres recibir?
                </label>
              </div>
              <div>
                <select
                  required
                  name="typeInfo"
                  id="typeInfo"
                  className={styleInput.input}
                  onChange={handleOnChange}
                >
                  <option value=""></option>
                  <option value="interestedInInvesting">Inversionista</option>
                  <option value="interestedInBorrowing">Empresa</option>
                </select>
              </div>
            </div>
          </div>
          <Switch
            isOn={acceptsPolicies}
            handleToggle={() => setAcceptsPolicies(!acceptsPolicies)}
            onColor="#FFC54D"
          />
          <div className={styles.div_button}>
            <Button text="Inscríbite" className={styles.button}/>
          </div>
          <span>{error}</span>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default RegistrationForm;
