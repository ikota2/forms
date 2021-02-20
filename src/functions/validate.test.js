import { validateName } from "./validate";
import { validateSurname } from "./validate";
import { validatePatronymic } from "./validate";
import { validateSex } from "./validate";
import { validateEmail } from "./validate";
import { validateTypeOfEmployment } from "./validate";
import { validateIncomeType } from "./validate";
import { validateBank } from "./validate";
import { validateTypeOfRealty } from "./validate";
import { validateDateOfBirth } from "./validate";
import { validateCostOfRealty } from "./validate";
import { validatePlaceOfBirth } from "./validate";

test("validateName returns false", () => {
  expect(validateName("Vasya")).toBeFalsy();
});

test("validateName returns true", () => {
  expect(validateName("Вася")).toBeTruthy();
});

test("validateSurname returns true", () => {
  expect(validateSurname("Яковенко")).toBeTruthy();
});
describe.each([[""], ["ь"], ["ъ"], ["0"]])(
  "validateSurname for %s returns false",
  (a) => {
    expect(validateSurname(a)).toBeFalsy();
  }
);

test("validatePatronymic returns false", () => {
  expect(validatePatronymic("yfdhs")).toBeFalsy();
});
test("validatePatronymic returns false", () => {
  expect(validatePatronymic("Яку")).toBeFalsy();
});
test("validatePatronymic returns true", () => {
  expect(validatePatronymic("Якупович")).toBeTruthy();
});

test("validateSex returns false", () => {
  expect(validateSex(undefined)).toBeFalsy();
});
test("validateSex returns true", () => {
  expect(validateSex(true)).toBeTruthy();
});

test("validateEmail returns false", () => {
  expect(validateEmail("ivanhotmail.com")).toBeFalsy();
});
test("validateEmail returns true", () => {
  expect(validateEmail("ivan@hotmail.com")).toBeTruthy();
});

test("validateTypeOfEmployment returns false", () => {
  expect(validateTypeOfEmployment(undefined)).toBeFalsy();
});
test("validateTypeOfEmployment returns true", () => {
  expect(validateTypeOfEmployment(true)).toBeTruthy();
});

test("validateIncomeType returns false", () => {
  expect(validateIncomeType(undefined)).toBeFalsy();
});
test("validateIncomeType returns true", () => {
  expect(validateIncomeType(true)).toBeTruthy();
});

test("validateBank returns false", () => {
  expect(validateBank(undefined)).toBeFalsy();
});
test("validateBank returns true", () => {
  expect(validateBank(true)).toBeTruthy();
});

test("validateTypeOfRealty returns false", () => {
  expect(validateTypeOfRealty(undefined)).toBeFalsy();
});
test("validateTypeOfRealty returns true", () => {
  expect(validateTypeOfRealty(true)).toBeTruthy();
});

test("validateDateOfBirth returns false if user is not an adult", () => {
  expect(validateDateOfBirth("2010-02-13")).toBeFalsy();
});
test("validateDateOfBirth returns true if user is an adult", () => {
  expect(validateDateOfBirth("1990-02-13")).toBeTruthy();
});

test("validateCostOfRealty returns false", () => {
  expect(validateCostOfRealty(undefined)).toBeFalsy();
});
test("validateCostOfRealty returns true", () => {
  expect(validateCostOfRealty("12345")).toBeTruthy();
});

test("validatePlaceOfBirth returns false", () => {
  expect(validatePlaceOfBirth(undefined)).toBeFalsy();
});
test("validatePlaceOfBirth returns false", () => {
  expect(validatePlaceOfBirth("ujhjkk")).toBeFalsy();
});
test("validatePlaceOfBirth returns false", () => {
  expect(validatePlaceOfBirth("г.")).toBeFalsy();
});
test("validatePlaceOfBirth returns true", () => {
  expect(validatePlaceOfBirth("Ялта")).toBeTruthy();
});
