const { red } = require("color-name")
const e = require("express")

const home = (req, res) => {
  res.send('HOME')
}

const pagina1 = (req, res) => {
  res.send('HOME/PAGINA1')
}

const calc = (req, res) => {
  console.log(req.query)
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query
    const soma = parseFloat(num1) + parseFloat(num2)
    // console.log(soma)
    res.send('A soma e:' + soma)
  } else {
    res.send('calculadora')
  }
}

const par = (req, res) => {
  const isPar = (req.params.num % 2 === 0)
  if (isPar) {
    res.send('O numero eh par')
  } else {
    res.send('o numero eh impar')
  }
}

module.exports = {
  home,
  pagina1,
  calc,
  par
}