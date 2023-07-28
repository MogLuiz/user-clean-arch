export const isValidUUID = (uuid: string): boolean => uuidRegex.test(uuid)

const uuidRegex =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[8-9a-fA-F][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
