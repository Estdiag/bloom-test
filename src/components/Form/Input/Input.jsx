import React from 'react';
import styles from './input.module.css';

const Input = ({ id, type, text, onChange, value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.div_label}>
        <label htmlFor={id}>{text}</label>
      </div>
      <div>
        <input
          type={type}
          id={id}
          name={id}
          className={styles.input}
          onChange={onChange}
          value={value}
          required
        />
      </div>
    </div>
  );
};

export default Input;
