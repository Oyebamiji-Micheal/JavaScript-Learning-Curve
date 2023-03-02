const courses = ['Algebra', 'Mechanics', 'Statistics', 'Calulus']

// Method I
for (let i = 0; i < courses.length; i++) {
  console.log(courses[i])
}

// Method II
for (const course of courses) {
  console.log(course)
}

// First n fibonacci sequence
function fibonacci(n) {
  if (n == 1 || n == 0) {
    return n
  }

  let fib = [0, 1]

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return fib
}

console.log(`The first 6 fibonacci sequence is ${fibonacci(6)}`)
console.log(`The first 10 fibonacci sequence is ${fibonacci(10)}`)


// Frequency of characters in a sentence
function frequency(sentence) {
    let hashmap = {}

    for (const char of sentence) {
        if (hashmap.hasOwnProperty(char)) {
            hashmap[char] += 1
        } else {
            hashmap[char] = 1
        }
    }

    console.log(hashmap)
}

frequency('Abstract Algebra')