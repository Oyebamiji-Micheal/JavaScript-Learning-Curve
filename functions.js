// Greet user
function greet(name) {
  console.log(`Hello ${name} Good Morning!`)
}
greet('Mike')

// A simple quadratic equation calculator
// This is no where optimal. Don't mock me 😌

function quadratic(a, b, c) {
  const discriminant = Math.pow(b, 2) - 4 * a * c

  if (discriminant == 0) {
    const root1 = -b / (2 * a)
    const res = `The equation has real and equal roots (${root1})`
    return res
  } else if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a)
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a)
    const res = `The equation has real and distinct roots (${root1} and ${root2})`
    return res
  } else {
    return `The equation has complex roots`
  }
}

equation1 = quadratic(1, 4, 4)
console.log(equation1)

equation2 = quadratic(1, 1, -6)
console.log(equation2)

equation3 = quadratic(2, 2, 2)
console.log(equation3)
