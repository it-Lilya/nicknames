export class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const charMatch = /^[A-Za-z]*([A-za-z(\d{0,3})_-]*)[A-Za-z]$/;
    return charMatch.test(this.name);
  }
}
