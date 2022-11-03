interface Params {
  firstParam?: string
  secondParam?: string
}
const myFunc = (para: Params) => {
  const { firstParam = 'defaultFirst', secondParam = 'defaultSecond' } = para
  const result = `firstParam : ${firstParam}, secondParam :${secondParam}`
  return result
}