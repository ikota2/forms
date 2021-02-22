import React from "react";
import "./title.css";

export default function Title({ title, subtitle }) {
  return (
    <>
      <h3 className='title'>{title}</h3>
      <p className='subtitle'>{subtitle}</p>
    </>
  );
}
