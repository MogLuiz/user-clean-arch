import { Entity } from './entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('should initialize constructor with correct props', () => {
    const props = {
      prop1: 'prop1',
      prop2: 2,
    }

    const sut = new StubEntity(props)

    expect(sut.id).toBeDefined()
    expect(sut.props.prop1).toEqual(props.prop1)
    expect(sut.props.prop2).toEqual(props.prop2)
  })
})
