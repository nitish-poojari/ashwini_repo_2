let tag = document.createElement("p");
let flag1 = document.getElementById("six").innerHTML
function factorial(n: number): number {
  if (n == 0)
    return 1
  return n * factorial(n - 1)
}
function main(): void {
  for (let i = 1; i <= 20; i++) {
    let output = factorial(i)
    document.write(`${output} <br>`)
  }
}