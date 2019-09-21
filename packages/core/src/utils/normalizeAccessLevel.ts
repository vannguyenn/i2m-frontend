import { map } from 'lodash'

const normalizeAccessLevel = root => {
  const data = root.data
  if (!data) {
    return
  }

  const normalizedData = {
    ...data,
    key: data._id,
    value: data._id,
    title: data.name,
  }

  return { ...normalizedData, children: map(root.children, normalizeAccessLevel) }
}

export default normalizeAccessLevel
