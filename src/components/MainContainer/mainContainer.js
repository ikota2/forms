import React from "react";
import PreviousNextBtns from "../PreviousNextBtns/previousNextBtns";

export function Container({ children }) {
  return (
    <div className='container'>
      {children}
      <PreviousNextBtns />
    </div>
  );
}
