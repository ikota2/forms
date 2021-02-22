import React from "react";
import { connect } from "react-redux";
import { typesOfEmployment } from "../TypeOfEmployment/TypeOfEmployment";
import { banks } from "../ChooseBank/ChooseBank";
import { gender } from "../AboutYou/AboutYou";
import { incomeTypeOptions } from "../Income/Income";
import { realty } from "../ChooseTheRealty/ChooseTheRealty";
import { BottomSubmit } from "../BottomSubmit/BottomSubmit";
import "./resume.css";

function mapStateToProps(state) {
  return {
    name: state.data.name,
    surname: state.data.surname,
    patronymic: state.data.patronymic,
    eMail: state.data.eMail,
    typeOfEmployment: state.data.typeOfEmployment,
    incomeType: state.data.incomeType,
    bank: state.data.bank,
    typeOfRealty: state.data.typeOfRealty,
    costOfRealty: state.data.costOfRealty,
    sex: state.data.sex,
    dateOfBirth: state.data.dateOfBirth,
    placeOfBirth: state.data.placeOfBirth,
  };
}

export const Resume = connect(mapStateToProps)(Resume_);
export function Resume_({
  name,
  surname,
  patronymic,
  eMail,
  typeOfEmployment,
  incomeType,
  bank,
  typeOfRealty,
  costOfRealty,
  sex,
  dateOfBirth,
  placeOfBirth,
}) {
  return (
    <div className='resume'>
      <div className='resume__descriptionAndTitle'>
        <span className='resume__descriptionAndTitle_description'>Имя:</span>
        <span className='resume__descriptionAndTitle_title'>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </span>
      </div>
      <div className='resume__descriptionAndTitle'>
        <span className='resume__descriptionAndTitle_description'>
          Фамилия:
        </span>
        <span className='resume__descriptionAndTitle_title'>
          {surname.charAt(0).toUpperCase() + surname.slice(1)}
        </span>
      </div>
      <div className='resume__descriptionAndTitle'>
        <span className='resume__descriptionAndTitle_description'>
          Отчество:
        </span>
        <span className='resume__descriptionAndTitle_title'>
          {patronymic.charAt(0).toUpperCase() + patronymic.slice(1)}
        </span>
      </div>
      <div className='resume__descriptionAndTitle'>
        <span className='resume__descriptionAndTitle_description'>Пол:</span>
        <span className='resume__descriptionAndTitle_title'>
          {gender.find((g) => g.key === sex)?.title}
        </span>
      </div>
      <div className='resume__descriptionAndTitle'>
        <span className='resume__descriptionAndTitle_description'>
          Дата рождения:
        </span>
        <span className='resume__descriptionAndTitle_title'>{dateOfBirth}</span>
      </div>
      <div className='resume__descriptionAndTitle'>
        <span className='resume__descriptionAndTitle_description'>
          Место рождения:
        </span>
        <span className='resume__descriptionAndTitle_title'>
          {placeOfBirth.charAt(0).toUpperCase() + placeOfBirth.slice(1)}
        </span>
      </div>
      <div className='resume__descriptionAndTitle'>
        <span className='resume__descriptionAndTitle_description'>Email:</span>
        <span className='resume__descriptionAndTitle_title'>{eMail}</span>
      </div>
      <div className='resume__descriptionAndTitle'>
        <span className='resume__descriptionAndTitle_description'>
          Тип занятости:
        </span>
        <span className='resume__descriptionAndTitle_title'>
          {
            typesOfEmployment.find((type) => type.key === typeOfEmployment)
              ?.title
          }
        </span>
      </div>
      <div className='resume__descriptionAndTitle'>
        <span className='resume__descriptionAndTitle_description'>
          Способ подвтерждения дохода:
        </span>
        <span className='resume__descriptionAndTitle_title'>
          {incomeTypeOptions.find((option) => option.key === incomeType)?.title}
        </span>
      </div>
      <div className='resume__descriptionAndTitle'>
        <span className='resume__descriptionAndTitle_description'>Банк:</span>
        <span className='resume__descriptionAndTitle_title'>
          {banks.find((b) => b.key === bank)?.title}
        </span>
      </div>
      <div className='resume__descriptionAndTitle'>
        <span className='resume__descriptionAndTitle_description'>
          Тип недвижимости:
        </span>
        <span className='resume__descriptionAndTitle_title'>
          {realty.find((r) => r.key === typeOfRealty)?.title}
        </span>
      </div>
      <div className='resume__descriptionAndTitle'>
        <span className='resume__descriptionAndTitle_description'>
          Примерная стоимость недвижимости:
        </span>
        <span className='resume__descriptionAndTitle_title'>
          {costOfRealty}
          {" рублей"}
        </span>
      </div>
      <BottomSubmit />
    </div>
  );
}
