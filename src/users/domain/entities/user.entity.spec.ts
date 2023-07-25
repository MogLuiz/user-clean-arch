import { faker } from '@faker-js/faker'

import { UserEntity, UserProps } from './user.entity'

type MakeSut = {
  sut: UserEntity
  props: UserProps
}

const makeSut = (): MakeSut => {
  const props = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }

  const sut = new UserEntity(props)

  return { sut, props }
}

describe('User entity unit tests', () => {
  it('should initialize constructor with correct props', () => {
    const { sut, props } = makeSut()

    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('should class getter return correct name', () => {
    const { sut, props } = makeSut()

    expect(sut.name).toEqual(props.name)
  })
})
