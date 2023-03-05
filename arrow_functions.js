// 12 x 12 multiplication table

let multiply = () => {
  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      console.log(`${i} x ${j} = ${i * j}`)
    }
  }
}

multiply()
