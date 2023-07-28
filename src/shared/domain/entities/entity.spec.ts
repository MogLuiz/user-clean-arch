import { isValidUUID } from '@/users/domain/testing/helpers/is-valid-uuuid'
import { Entity } from './entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  const props = {
    prop1: 'prop1',
    prop2: 2,
  }
  it('should initialize constructor with correct props', () => {
    const sut = new StubEntity(props)

    expect(sut.id).toBeDefined()
    expect(sut.props.prop1).toEqual(props.prop1)
    expect(sut.props.prop2).toEqual(props.prop2)
  })

  it('should accept a valid uuid', () => {
    const validUUID = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'
    const sut = new StubEntity(props, validUUID)

    expect(isValidUUID(validUUID)).toBeTruthy()
    expect(sut.id).toEqual(validUUID)
  })
})
