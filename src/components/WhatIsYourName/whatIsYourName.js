import React from "react";
import { connect } from "react-redux";
import "./whatIsYourName.css";
import Title from "../Title/Title";
import { Input } from "../Input/Input";

function mapStateToProps(state) {
  return {
    name: state.data.name,
    surname: state.data.surname,
    patronymic: state.data.patronymic,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeData: (field, value) =>
      dispatch({ type: "CHANGE_DATA", field, value }),
  };
}

export const WhatIsYourName = connect(
  mapStateToProps,
  mapDispatchToProps
)(WhatIsYourName_);
function WhatIsYourName_({ changeData, name, surname, patronymic }) {
  return (
    <>
      <Title
        title='Как вас зовут?'
        subtitle='Заполните как в паспорте, это важно для банков'
      />
      <Input
        name='surname'
        label='Фамилия'
        value={surname}
        onChange={(value) => changeData("surname", value)}
      />
      <Input
        name='name'
        label='Имя'
        value={name}
        onChange={(value) => changeData("name", value)}
      />
      <Input
        name='patronymic'
        label='Отчество'
        value={patronymic}
        onChange={(value) => changeData("patronymic", value)}
      />
    </>
  );
}
