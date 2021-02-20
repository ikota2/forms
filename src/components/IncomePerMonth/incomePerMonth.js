import React from "react";
import "./incomePerMonth.css";

export function IncomePerMonth() {
  return (
    <>
      <div className='incomePerMonth__container'>
        <p className='incomePerMonth__p'>
          У вас полностью “белый” доход, что обычно обеспечивает самые выгодные
          предложения банков.
        </p>
        <p className='incomePerMonth__p'></p>
        <p className='incomePerMonth__p'>
          Если, существенная часть ваших доходов не отражена в 2НДФЛ - вы можете
          рассмотреть справку по форме банка, как один из вариантов
          подвтерждения дохода.
        </p>
      </div>
    </>
  );
}
