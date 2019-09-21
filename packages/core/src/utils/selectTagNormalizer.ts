import { map, remove, uniq, trim } from 'lodash'

const selectTagNormalizer = (values: any[]) => {
  let newValue = map(values, value => trim(value))
  remove(newValue, value => !value)
  newValue = uniq(newValue)
  return newValue ? newValue : null
}

export default selectTagNormalizer
