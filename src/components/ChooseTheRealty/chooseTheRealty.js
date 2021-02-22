import React from "react";
import { connect } from "react-redux";
import "./chooseTheRealty.css";
import Title from "../Title/Title";
import { Input } from "../Input/Input";
import { ReactComponent as NewBuildings } from "./img/newBuildings.svg";
import { ReactComponent as SecondBuildings } from "./img/secondBuildings.svg";
import { ReactComponent as DontKnow } from "./img/dontKnow.svg";
import { makeSpaceEveryThreeChar } from "../../functions/makeSpaceEveryThreeChar";

export const realty = [
  {
    key: "newBuildings",
    title: "Новостойка",
    Component: NewBuildings,
  },
  {
    key: "secondBuildings",
    title: "Вторичка",
    Component: SecondBuildings,
  },
  {
    key: "dontKnow",
    title: "Не решил",
    Component: DontKnow,
  },
];

function mapStateToProps(state) {
  return {
    typeOfRealty: state.data.typeOfRealty,
    costOfRealty: state.data.costOfRealty,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeData: (value) =>
      dispatch({ type: "CHANGE_DATA", field: "typeOfRealty", value }),
    changeCostOfRealty: (value) =>
      dispatch({ type: "CHANGE_DATA", field: "costOfRealty", value }),
  };
}

export const ChooseTheRealty = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseTheRealty_);
function ChooseTheRealty_({
  typeOfRealty,
  costOfRealty,
  changeData,
  changeCostOfRealty,
}) {
  function handleChange(event) {
    changeData(event.target.value);
  }
  function handleChangeCostOfRealty(value) {
    const digits = value.replace(/\D/g, ""); //не цифры меняются на ""
    const formattedDigits = makeSpaceEveryThreeChar(digits);
    changeCostOfRealty(formattedDigits);
  }
  return (
    <>
      <Title title='Какую недвижимость вы хотите приобрести?' />

      <div className='chooseTheRealtyContainer'>
        {realty.map(({ key, title, Component }) => (
          <React.Fragment key={key}>
            <input
              className='chooseTheRealtyContainer__input'
              type='radio'
              name='realty'
              id={key}
              value={key}
              onChange={handleChange}
              checked={key === typeOfRealty}
            />
            <label
              key={key}
              htmlFor={key}
              className='chooseTheRealtyContainer__imgAndDescription'
            >
              <Component
                alt={title}
                className='chooseTheRealtyContainer__img'
              />
              <span className='chooseTheRealtyContainer__description'>
                {title}
              </span>
            </label>
          </React.Fragment>
        ))}
      </div>

      <Input
        type='text'
        name='approximatePropertyValue'
        value={costOfRealty}
        label='Примерная стоимость недвижимости'
        onChange={handleChangeCostOfRealty}
      />
    </>
  );
}
