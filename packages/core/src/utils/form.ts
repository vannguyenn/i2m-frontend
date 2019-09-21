import { findIndex } from 'lodash'

export const useFormVisited = visited => {
  let formVisited = false
  Object.keys(visited).forEach(field => {
    if (visited[field]) {
      formVisited = true
    }
  })
  return formVisited
}

export const checkTouchedForm = touchedFields => {
  console.log(touchedFields)
  const fieldValue = Object.values(touchedFields)
  return findIndex(fieldValue, val => val) >= 0
}
