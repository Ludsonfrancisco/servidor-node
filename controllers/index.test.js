const indexControllers = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('Index controller', () => {
  it('Home', () => {
    let res = {
      render: function () { }
    }
    let data = {
      time: 10,
      list: ['Ludson', 'Francisco', 'Dutra', 'Correa'],
      animais: [
        { name: 'Bilu' },
        { name: 'Espirro' },
        { name: 'Duck' },
        { name: 'Pequeno' },
        { name: 'Duqueza' }
      ]
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('home', data)
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
      render: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('erro')
    indexControllers.calc({ query: {} }, res)
  })
  it('calcs', () => {
    let res = {
      render: function () { }
    }
    let req = {
      query: {
        num1: '10',
        num2: '20'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('calc', { soma: 30 })
    indexControllers.calc(req, res)
  })
  it('handles without num1', () => {
    let res = {
      render: function () { }
    }
    let req = {
      query: {
        num2: '20'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('erro')
    indexControllers.calc(req, res)
  })
  it('handles without num2', () => {
    let res = {
      render: function () { }
    }
    let req = {
      query: {
        num1: '10'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('erro')
    indexControllers.calc(req, res)
  })
})