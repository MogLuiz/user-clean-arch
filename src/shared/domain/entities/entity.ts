import { InvalidUUIDError } from '@/shared/errors'
import { isValidUUID } from '@/users/domain/testing/helpers/is-valid-uuuid'
import crypto from 'node:crypto'

export abstract class Entity<T> {
  public readonly _id: string
  public readonly props: T

  constructor(props: T, id?: string) {
    this._id = id ?? crypto.randomUUID()
    this.props = props
    this.validate()
  }

  validate(): void {
    if (!isValidUUID(this.id)) throw new InvalidUUIDError()
  }

  get id(): string {
    return this._id
  }

  toJSON(): Required<{ id: string } & T> {
    return {
      id: this._id,
      ...this.props,
    } as Required<{ id: string } & T>
  }
}
