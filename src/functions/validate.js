export function validateName(str) {
  const regexp = /^[а-яё\s\-]+$/i;
  return str.length >= 2 && regexp.test(str);
}

export function validateSurname(str) {
  const regexp = /^[а-яё\s\-]+$/i;
  return str.length >= 2 && regexp.test(str);
}

export function validatePatronymic(str) {
  const regexp = /^[а-яё]+$/i;
  return str.length >= 5 && regexp.test(str);
}

export function validateSex(str) {
  return Boolean(str);
}

export function validateEmail(str) {
  const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  return regexp.test(str);
}

export function validateTypeOfEmployment(str) {
  return Boolean(str);
}

export function validateIncomeType(str) {
  return Boolean(str);
}

export function validateBank(str) {
  return Boolean(str);
}

export function validateTypeOfRealty(str) {
  return Boolean(str);
}

export function validateDateOfBirth(str) {
  const [year, month, day] = str.split("-").map(Number);
  const dayOfBirthAfter18Years = new Date(year + 18, month - 1, day);
  const now = new Date();
  return now >= dayOfBirthAfter18Years;
}

export function validateCostOfRealty(str) {
  if (str === undefined) {
    return false;
  }
  const digits = str.replace(/\D/g, "");
  const regexp = /^\d+$/;
  return digits.length >= 5 && regexp.test(digits);
}

export function validatePlaceOfBirth(str) {
  const regexp = /^[а-яё\s\-]+$/i;
  if (str === undefined) {
    return false;
  }
  return str.length >= 3 && regexp.test(str);
}

export const fieldsAndValidation = {
  name: validateName,
  surname: validateSurname,
  patronymic: validatePatronymic,
  sex: validateSex,
  eMail: validateEmail,
  typeOfEmployment: validateTypeOfEmployment,
  bank: validateBank,
  typeOfRealty: validateTypeOfRealty,
  dateOfBirth: validateDateOfBirth,
  costOfRealty: validateCostOfRealty,
  placeOfBirth: validatePlaceOfBirth,
  incomeType: validateIncomeType,
};
