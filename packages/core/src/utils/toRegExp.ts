export const testRegExpString = /^\/((?:\\\/|[^/])+)\/([migyu]{0,5})?$/

const toRegExp = (input: string) => {
  const parts = testRegExpString.exec(input)

  if (parts) {
    try {
      const regex = new RegExp(parts[1], parts[2])
      if (regex instanceof RegExp) {
        return regex
      }
    } catch {}
  }

  throw new Error(`Invalid RegExp: ${input}`)
  return false
}

export default toRegExp
