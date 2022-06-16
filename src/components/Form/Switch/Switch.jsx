import React from 'react';
import styles from './switch.module.css'

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <input
      checked={isOn}
      onChange={handleToggle}
        className={styles.switch_checkbox}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
      style={{ background: isOn && onColor }}
        className={styles.switch_label}
        htmlFor={`react-switch-new`}
      >
        <span className={styles.switch_button} />
      </label>
    </>
  );
};
export default Switch;