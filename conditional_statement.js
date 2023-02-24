console.log('Introduction to Conditional Statements')

let age = prompt('How old are you?')

if (age >= 18) {
  console.log('You are eligible to vote')
} else {
  console.log('you are not eligible to vote')
}

let score = prompt('Enter your score')
let gradePoint

if (score >= 70) {
  gradePoint = 'A'
} else if (score > 60) {
  gradePoint = 'B'
} else if (score > 50) {
  gradePoint = 'C'
} else if (score > 45) {
  gradePoint = 'D'
} else {
  gradePoint = 'E'
}

console.log(`your grade point is ${gradePoint}`)
