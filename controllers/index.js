const home = (req, res) => {
  const time = new Date().getTime()
  res.render('home', {
    time
  })
}

const pagina1 = (req, res) => {
  res.send('HOME/PAGINA1')
}

const calc = (req, res) => {
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query
    const soma = parseFloat(num1) + parseFloat(num2)
    // console.log(soma)
    res.render('calc', { soma })
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