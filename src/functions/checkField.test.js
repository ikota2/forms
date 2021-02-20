import { checkField } from "./checkField";

test('/your-name returns ["name", "surname", "patronymic"]', () => {
  expect(checkField("/your-name")).toEqual(["name", "surname", "patronymic"]);
});

test('/about-you returns ["sex", "dateOfBirth", "placeOfBirth"]', () => {
  expect(checkField("/about-you")).toEqual([
    "sex",
    "dateOfBirth",
    "placeOfBirth",
  ]);
});

test('/email returns ["eMail"]', () => {
  expect(checkField("/email")).toEqual(["eMail"]);
});

test('/type-of-employment returns ["typeOfEmployment"]', () => {
  expect(checkField("/type-of-employment")).toEqual(["typeOfEmployment"]);
});

test('/choose-bank returns ["bank"]', () => {
  expect(checkField("/choose-bank")).toEqual(["bank"]);
});

test('/choose-the-realty returns ["bank"]', () => {
  expect(checkField("/choose-the-realty")).toEqual([
    "typeOfRealty",
    "costOfRealty",
  ]);
});

test('/income returns ["incomeType"]', () => {
  expect(checkField("/income")).toEqual(["incomeType"]);
});
