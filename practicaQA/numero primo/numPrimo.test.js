const numPrimo = require('./numPrimo');

test('Verificar si un número primo devuelve true', () => {
  expect(numPrimo(5)).toBe(true);
});

test('Verificar si un número no primo devuelve false', () => {
  expect(numPrimo(4)).toBe(false);
});

test('Asegurar que 1 no sea considerado primo', () => {
  expect(numPrimo(1)).toBe(false);
});