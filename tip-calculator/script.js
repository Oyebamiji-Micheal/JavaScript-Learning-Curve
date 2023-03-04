/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
let billInput
let tipInput
let totalBill
let numberOfPeople
let perPersonTotal


// Get number of people from number of people div

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  billInput = Number(document.getElementById('billTotalInput').value)

  // get the tip from user & convert it into a percentage (divide by 100)
  tipInput = Number(document.getElementById('tipInput').value) / 100

  // get the total tip amount

  // calculate the total (tip amount + bill)
  totalBill = billInput + tipInput * billInput

  // calculate the per person total (total divided by number of people)
  numberOfPeople = Number(document.getElementById('numberOfPeople').innerText)
  perPersonTotal = totalBill / numberOfPeople

  // update the perPersonTotal on DOM & show it to user
  document.getElementById('perPersonTotal').innerText = `$${perPersonTotal.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
  numberOfPeople += 1
  document.getElementById('numberOfPeople').innerText = numberOfPeople
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  // decrement the amount of people
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
  if (numberOfPeople > 1) {
    numberOfPeople -= 1
    document.getElementById('numberOfPeople').innerText = numberOfPeople
    calculateBill()
  }
}
