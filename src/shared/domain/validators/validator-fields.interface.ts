export type FieldsErrors = {
  [field: string]: string[]
}

export interface ValidatorFieldsInterface<T, U> {
  errors: FieldsErrors
  validatedData: T
  validate(data: U): boolean
}
