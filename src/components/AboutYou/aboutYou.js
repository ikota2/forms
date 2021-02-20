import React from "react";
import { connect } from "react-redux";
import Title from "../Title/title";
import { Tabs } from "../Tabs/tabs";
import { Input } from "../Input/input";

export const gender = [
  {
    title: "Женщина",
    key: "woman",
  },
  {
    title: "Мужчина",
    key: "man",
  },
];

function mapStateToProps(state) {
  return {
    sex: state.data.sex,
    dateOfBirth: state.data.dateOfBirth,
    placeOfBirth: state.data.placeOfBirth,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeData: (field, value) =>
      dispatch({ type: "CHANGE_DATA", field, value }),
  };
}

export const AboutYou = connect(mapStateToProps, mapDispatchToProps)(AboutYou_);
function AboutYou_({ changeData, dateOfBirth, placeOfBirth }) {
  return (
    <>
      <Title title='Расскажите о себе' />
      <Tabs options={gender} name='sex' />
      <Input
        name='dateOfBirth'
        type='date'
        label='Дата рождения'
        value={dateOfBirth}
        onChange={(value) => changeData("dateOfBirth", value)}
      />
      <Input
        name='placeOfBirth'
        label='Место рождения'
        value={placeOfBirth}
        onChange={(value) => changeData("placeOfBirth", value)}
      />
    </>
  );
}
