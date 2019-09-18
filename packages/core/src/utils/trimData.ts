import { map, trim, isArray, isObject, isString, mapValues } from 'lodash'

const trimData = (values: any) => {
  if (isString(values)) {
    return trim(values)
  }

  if (isArray(values)) {
    return map(values, trimData)
  }

  if (isObject(values)) {
    return mapValues(values, trimData)
  }

  return values
}

export default trimData
