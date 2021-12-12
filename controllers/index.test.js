const indexControllers = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('Index controller', () => {
  it('Home', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('HOME')
    indexControllers.home({}, res)
  })
  it('Pagina1', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('HOME/PAGINA1')
    indexControllers.pagina1({}, res)
  })
  it('handles without num1 and num2', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('calculadora')
    indexControllers.calc({ query: {} }, res)
  })
  it('calcs', () => {
    let res = {
      send: function () { }
    }
    let req = {
      query: {
        num1: '10',
        num2: '20'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('A soma e:30')
    indexControllers.calc(req, res)
  })
  it('handles without num1', () => {
    let res = {
      send: function () { }
    }
    let req = {
      query: {
        num2: '20'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('calculadora')
    indexControllers.calc(req, res)
  })
  it('handles without num2', () => {
    let res = {
      send: function () { }
    }
    let req = {
      query: {
        num1: '10'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('calculadora')
    indexControllers.calc(req, res)
  })
})