import { Validator } from '../index';

test('name check', () => {
  const person = new Validator('Bob');
  const received = person.validateUsername();
  const expected = true;
  expect(received).toEqual(expected);
});

test('invalid validation', () => {
  const person = new Validator('Bo1111b');
  const received = person.validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('invalid validation second', () => {
  const person = new Validator('_Bob');
  const received = person.validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('invalid validation third', () => {
  const person = new Validator('1Bob');
  const received = person.validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});
