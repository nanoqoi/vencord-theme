export const css = (strings: TemplateStringsArray, ...values: any[]) => {
  return strings.reduce((acc, str, i) => {
    return acc + str + (values[i] || '')
  }, '')
}
