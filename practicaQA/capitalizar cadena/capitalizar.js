
function capitalizar(cadena) {
    if (cadena.length === 0) {
      return '';
    }
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }
  
  module.exports = capitalizar;