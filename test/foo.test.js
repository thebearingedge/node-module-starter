
import { expect, rejected } from '@thebearingedge/test-utils'
import foo from '../src/foo'

describe('tests', () => {

  it('should run', async () => {
    const err = await rejected(foo())
    expect(err)
      .to.be.an.instanceof(Error)
      .and.have.property('message', 'bar')
  })

})
