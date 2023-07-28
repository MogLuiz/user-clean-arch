import crypto from 'node:crypto'

export abstract class Entity<T> {
  public readonly _id: string
  public readonly props: T

  constructor(props: T, id?: string) {
    this._id = id ?? crypto.randomUUID()
    this.props = props
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
