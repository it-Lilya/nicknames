export class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const charMatch = /^[A-Za-z]+([A-za-z\d/_-]*)+[A-Za-z]$/;
    const characterValidation = charMatch.test(this.name);
    let validationResult;
    if (characterValidation === true) {
      const digitValidation = /\d{4,4}/.test(this.name);
      if (digitValidation === true) {
        validationResult = ('Нельзя вводить более 3 цифр подряд');
      } else {
        validationResult = ('Данные верны');
      }
    } else {
      validationResult = ('Ошибка в введенных данных');
    }
    return validationResult;
  }
}
