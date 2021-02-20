import React from "react";
import "./input.css";

export function Input({ name, label, onChange, value, type = "text" }) {
  return (
    <div className='input'>
      <label htmlFor={name} className='input__label'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        className='input__input'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
