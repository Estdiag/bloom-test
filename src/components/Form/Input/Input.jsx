import React from 'react';

const Input = ({id, type, text}) => {
  return (
    <div>
      <label for={id}>{text}</label>
      <input type={type} id={id}name="fname" />
    </div>
  );
};

export default Input;
