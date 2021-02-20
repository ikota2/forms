import React from "react";
import { Link } from "../Link/Link";
//import "../PreviousNextBtns/previousNextBtns.css";
import "./bottomSubmit.css";

export function BottomSubmit() {
  return (
    <div className='bottomSubmit'>
      <Link
        to='/income'
        className='bottomSubmit__button bottomSubmit__button_prev'
      >
        Назад
      </Link>
      <Link
        to='/congrats'
        className='bottomSubmit__button bottomSubmit__button_next'
      >
        Подтвердить
      </Link>
    </div>
  );
}
