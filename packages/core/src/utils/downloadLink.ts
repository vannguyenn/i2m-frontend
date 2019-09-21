import { isEmpty } from 'lodash'

export const downloadLink = (url: string, fileName: string) => {
  let a = document.createElement('a')
  if (!isEmpty(fileName)) {
    a.download = fileName
  }
  a.href = url
  a.target = '_blank'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
