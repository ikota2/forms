import { CHANGE_DATA } from "./types";

const initialState = {
  eMail: "",
  typeOfEmployment: "",
  incomeType: "",
  bank: "",
  typeOfRealty: "",
  costOfRealty: "",
  name: "",
  surname: "",
  patronymic: "",
  sex: "",
  dateOfBirth: "",
  placeOfBirth: "",
};

// action is
// store.dispatch
//     type: DATA_TYPE,
//     field: "email",
//     value: "name@mail.com",
// });

export function dataReducer(state = initialState, action) {
  if (action.type === CHANGE_DATA) {
    return { ...state, [action.field]: action.value }; // field будет куда ввели, а экшон вэлью что ввели
  }
  return state;
}
