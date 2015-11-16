
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import index from '../src'

chai.use(sinonChai)

const { expect } = chai

describe('index', () => {

  it('should run tests', () => {
    expect(typeof sinon.spy(index)).to.equal('function')
  })

})
