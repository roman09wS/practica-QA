const factorial = require('./factorial');

test('Factorial de 5 debería ser 120', () => {
  expect(factorial(5)).toBe(120);
});

test('Factorial de 0 debería ser 1', () => {
  expect(factorial(0)).toBe(1);
});

test('Factorial de un número negativo debería devolver NaN', () => {
  expect(factorial(-5)).toBeNaN();
});