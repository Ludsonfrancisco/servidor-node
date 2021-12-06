const clients = ((req, res) => {
  res.send('CLIENTS')
})

const creat = ((req, res) => {
  res.send('CLIENTS/NEW')
})


module.exports = {
  clients,
  creat
}
