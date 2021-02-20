const pathsAndFields = {
  "/your-name": ["name", "surname", "patronymic"],
  "/about-you": ["sex", "dateOfBirth", "placeOfBirth"],
  "/email": ["eMail"],
  "/type-of-employment": ["typeOfEmployment"],
  "/choose-bank": ["bank"],
  "/choose-the-realty": ["typeOfRealty", "costOfRealty"],
  "/income": ["incomeType"],
};

export function checkField(path) {
  return pathsAndFields[path];
}
