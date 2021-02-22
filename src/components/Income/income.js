import React from "react";
import Title from "../Title/Title";
import "./income.css";
import { Tabs } from "../Tabs/Tabs";
import { IncomePerMonth } from "../IncomePerMonth/IncomePerMonth";

export const incomeTypeOptions = [
  {
    title: "2НДФЛ",
    key: "2ndfl",
    text:
      "У вас полностью “белый” доход, что обычно обеспечивает самые выгодные предложения банков.",
  },
  {
    title: "Форма банка",
    key: "form",
    text: "Что-то ещё",
  },
  {
    title: "Никак",
    key: "nothing",
    text: "Ничего",
  },
];

export function Income() {
  return (
    <div className='income__container'>
      <Title title='Как вы можете подтвердить свой ежемесячный доход?' />
      <IncomePerMonth />
      <Tabs options={incomeTypeOptions} name='incomeType' />
      <p className='income__p'>Документы понадобятся позже, в банке</p>
    </div>
  );
}
