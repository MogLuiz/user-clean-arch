import { faker } from '@faker-js/faker'

import { UserEntity, UserProps } from './user.entity'
import { userDataBuilder } from '../testing/helpers/user-data-builder'

type MakeSut = {
  sut: UserEntity
  props: UserProps
}

const makeSut = (): MakeSut => {
  const props = userDataBuilder({})

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

  it('should class getters returns correct values', () => {
    const { sut, props } = makeSut()

    expect(sut.name).toEqual(props.name)
    expect(sut.email).toEqual(props.email)
    expect(sut.password).toEqual(props.password)
    expect(sut.createdAt).toBeInstanceOf(Date)
  })

  it('should class setters set correct values', () => {
    const newName = faker.person.firstName()
    const newPass = faker.internet.password()
    const { sut } = makeSut()

    sut['name'] = newName
    sut['password'] = newPass

    expect(sut.name).toEqual(newName)
    expect(sut.password).toEqual(newPass)
  })

  it('should updateName method update name property', () => {
    const newName = faker.person.firstName()
    const { sut } = makeSut()

    sut.updateName(newName)

    expect(sut.name).toEqual(newName)
  })

  it('should updatePassword method update password property', () => {
    const newPass = faker.internet.password()
    const { sut } = makeSut()

    sut.updatePassword(newPass)

    expect(sut.password).toEqual(newPass)
  })
})
