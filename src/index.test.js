import { describe, it } from 'global'
import { expect } from './__test__'
import { foo } from '.'

describe('my module', () => {

  it('is tested', async () => {
    const err = await foo().catch(err => err)
    expect(err)
      .to.be.an.instanceof(Error)
      .and.have.property('message', 'bar')
  })

})
