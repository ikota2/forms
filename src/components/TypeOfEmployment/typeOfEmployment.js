import React from "react";
import { connect } from "react-redux";
import "./typeOfEmployment.css";
import Title from "../Title/title";

export const typesOfEmployment = [
  {
    key: "for-hire",
    title: "По найму",
  },
  {
    key: "individual",
    title: "ИП",
  },
  {
    key: "business-owner",
    title: "Собственник бизнеса",
  },
  {
    key: "unofficialOrUnemployed",
    title: "Не работаю официально",
  },
];

function mapStateToProps(state) {
  return {
    typeOfEmployment: state.data.typeOfEmployment,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onChange: (value) =>
      dispatch({ type: "CHANGE_DATA", field: "typeOfEmployment", value }),
  };
}

export const TypeOfEmployment = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeOfEmployment_);
function TypeOfEmployment_({ typeOfEmployment, onChange }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className='typeOfEmployment__container'>
      <Title
        title='Теперь надо выбрать тип вашей занятости'
        subtitle='От типа занятости зависит какие ипотечные программы вам доступны'
      />
      {typesOfEmployment.map((theType) => (
        <>
          <input
            type='radio'
            name='typesOfEmployment__input'
            className='typesOfEmployment__input'
            key={theType.key}
            id={theType.key}
            onChange={handleChange}
            value={theType.key}
            checked={theType.key === typeOfEmployment}
          />
          <label htmlFor={theType.key} className='typeOfEmployment__label'>
            {theType.title}
          </label>
        </>
      ))}
    </div>
  );
}
