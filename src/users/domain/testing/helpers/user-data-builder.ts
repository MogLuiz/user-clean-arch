import { faker } from '@faker-js/faker'

import { UserProps } from '../../entities/user.entity'

type props = {
  name?: string
  email?: string
  password?: string
  createdAt?: Date
}

export const userDataBuilder = ({
  createdAt,
  email,
  name,
  password,
}: props): UserProps => ({
  name: name ?? faker.person.fullName(),
  email: email ?? faker.internet.email(),
  password: password ?? faker.internet.password(),
  createdAt: createdAt ?? new Date(),
})
