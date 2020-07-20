const currencyFormat = (number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(number)
}

const numberFormat = (number) => {
  return new Intl.NumberFormat('es-ES', { style: 'decimal' }).format(number)
}

export default { currencyFormat, numberFormat }
