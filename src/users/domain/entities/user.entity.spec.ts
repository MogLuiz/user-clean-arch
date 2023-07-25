import { faker } from '@faker-js/faker'

import { UserEntity } from './user.entity'

const entityProps = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
}

describe('User entity unit tests', () => {
  it('should initialize constructor with correct props', () => {
    const { props } = new UserEntity(entityProps)

    expect(props.name).toEqual(props.name)
    expect(props.email).toEqual(props.email)
    expect(props.password).toEqual(props.password)
    expect(props.createdAt).toBeInstanceOf(Date)
  })
})
