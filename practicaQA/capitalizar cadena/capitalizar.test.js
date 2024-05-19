const capitalizar = require('./capitalizar');

test('Verificar la conversión de una cadena a título', () => {
  expect(capitalizar('hola mundo')).toBe('Hola mundo');
});

test('Comprobar que una cadena vacía devuelva una cadena vacía', () => {
  expect(capitalizar('')).toBe('');
});

test('Asegurar que una cadena ya en título no cambie', () => {
  expect(capitalizar('Hola Mundo')).toBe('Hola Mundo');
});