import React from 'react';
import styles from './switch.module.css';

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <div>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.switch_checkbox}
        id="termAndConditions"
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className={styles.switch_label}
        htmlFor="termAndConditions"
      >
        <span className={styles.switch_button} />
      </label>
      <p className={styles.p}>
        He leido y acepto la
        <a href="#pablo">Politica de tratamiento de datos</a>
      </p>
    </div>
  );
};
export default Switch;
