const clientsControllers = require('./clients')
const expect = require('chai').expect
const sinon = require('sinon')

describe('clients controller', () => {
  it(' creat all clients', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('CLIENTS/NEW')
    clientsControllers.creat({}, res)
  })

  it(' returns all clients', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('CLIENTS')
    clientsControllers.clients({}, res)
  })
})