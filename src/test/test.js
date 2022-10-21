import { Validator } from '../index';

test('starts with letters', () => {
  const person = new Validator('1Bob');
  const received = person.validateUsername();
  const expected = 'Ошибка в введенных данных';
  expect(received).toEqual(expected);
});

test('ends with letters', () => {
  const person = new Validator('Bob1');
  const received = person.validateUsername();
  const expected = 'Ошибка в введенных данных';
  expect(received).toEqual(expected);
});

test('body character check', () => {
  const person = new Validator('B1-_ob');
  const received = person.validateUsername();
  const expected = 'Данные верны';
  expect(received).toEqual(expected);
});

test('digit repetition check', () => {
  const person = new Validator('B1111ob');
  const received = person.validateUsername();
  const expected = 'Нельзя вводить более 3 цифр подряд';
  expect(received).toEqual(expected);
});
