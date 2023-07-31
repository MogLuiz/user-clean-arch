import { validateSync } from 'class-validator'
import {
  FieldsErrors,
  ValidatorFieldsInterface,
} from './validator-fields.interface'

export abstract class ClassValidatorFields<T>
  implements ValidatorFieldsInterface<T>
{
  errors: FieldsErrors = null
  validatedData: T = null

  validate(data): boolean {
    const erros = validateSync(data)
    if (erros.length) {
      this.errors = {}
      erros.forEach(({ property, constraints }) => {
        this.errors[property] = Object.values(constraints)
      })
    } else {
      this.validatedData = data
    }

    return !erros.length
  }
}
