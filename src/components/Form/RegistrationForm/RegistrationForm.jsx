import React, { useState } from 'react';
import Input from '../Input/Input';
import Switch from '../Switch/Switch';
import Button from '../../Button/Button'

const RegistrationForm = () => {
  const [value, setValue] = useState(false);
  return (
    <form>
      <div>
        <div>
          <h1>Deja tus datos y recibe actualizaciones</h1>
        </div>
        <div>
          <Input id="fullName" type="text" text="Nombre completo" />
        </div>
        <div>
          <Input id="email" type="email" text="Correo electronico" />
        </div>
        <div>
          <Input id="cellPhoneNumberr" type="number" text="Numero de celular" />
        </div>
        <div>
          <label for="typeInfo">¿Qué información quieres recibir?</label>
          <br />
          <select name="typeInfo" id="typeInfo">
            <option value="investor">Inversionista</option>
            <option value="Company">Empresa</option>
          </select>
        </div>
        <div>
          <Switch isOn={value} handleToggle={() => setValue(!value)} onColor="#FFC54D"/>
          <p>He leido y acepto la <a href="#pablo">Politica de tratamiento de datos</a></p>
        </div>
        <div>
            <Button text="Inscríbite"/>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
