import { split, includes, trim } from 'lodash'

export const isMatchKeyword = (data: string, searchValue: string) => {
  let result = false
  const space = ' '
  const dataWords = split(trim(data.toLowerCase()), space)
  const searchValueWords = split(trim(searchValue.toLowerCase()), space)

  searchValueWords.forEach(word => {
    if (includes(dataWords, word)) {
      result = true
    }
  })

  return result
}
