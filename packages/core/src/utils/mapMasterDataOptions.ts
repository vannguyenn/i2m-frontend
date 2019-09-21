import { map } from 'lodash'

export const mapMasterDataOptions = (data) => {
  return map(data, ({ _id, value, ...rest }) => ({
    label: value,
    value: _id,
    ...rest,
  }))
}
