import React from "react";
import { connect } from "react-redux";
import "./chooseBank.css";
import Title from "../Title/title";

export const banks = [
  {
    key: "sber",
    title: "Сбербанк",
  },
  {
    key: "vtb",
    title: "Втб",
  },
  {
    key: "alfabank",
    title: "Альфабанк",
  },
  {
    key: "rayffaysen",
    title: "Райффайзенбанк",
  },
  {
    key: "gazprom",
    title: "Газпром",
  },
  {
    key: "otkrytie",
    title: "Открытие",
  },
  {
    key: "rosbank",
    title: "Росбанк",
  },
  {
    key: "rosselhozbank",
    title: "Россельхозбанк",
  },
  {
    key: "unikredit",
    title: "ЮниКредит Банк",
  },
  {
    key: "promsviaz",
    title: "Промсвязьбанк",
  },
  {
    key: "drugoy",
    title: "Другой банк",
  },
  {
    key: "nalichnie",
    title: "Наличные на руки",
  },
];
function mapStateToProps(state) {
  return {
    value: state.data.bank,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onChange: (value) =>
      dispatch({ type: "CHANGE_DATA", field: "bank", value }),
  };
}
export const ChooseBank = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseBank_);
function ChooseBank_({ value, onChange }) {
  return (
    <React.Fragment>
      <Title title='На карту какого банка получаете зарплату?' />
      <div className='banks'>
        {banks.map((bank) => (
          <>
            <input
              type='radio'
              name='bank'
              onChange={(event) => onChange(event.target.value)}
              className='banks__input'
              id={bank.key}
              value={bank.key}
              checked={bank.key === value}
            />
            <label htmlFor={bank.key} className='banks__label'>
              {bank.title}
            </label>
          </>
        ))}
      </div>
    </React.Fragment>
  );
}
