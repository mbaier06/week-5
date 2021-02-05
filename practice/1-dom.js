function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

window.addEventListener('DOMContentLoaded', function () {

 

  

  // ⬇️ ⬇️ ⬇️ YOUR CODE GOES HERE ⬇️ ⬇️ ⬇️

   // 1. use getRandomInt(6) to randomize dice values
  let die1 = getRandomInt(6)
  let die2 = getRandomInt(6)
  console.log(die1)

    // 2. find the dice element
  let dice = document.querySelector('.dice')

  // 3. replace the element's inner html with new html using the dice values above
  dice.innerHTML = `
  <img src="../images/dice/${die1}.png" class="die w-1/2 md:w-1/6">
  <img src="../images/dice/${die2}.png" class="die w-1/2 md:w-1/6">
  `


  // ⬆️ ⬆️ ⬆️ YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE ⬆️ ⬆️ ⬆️
})
