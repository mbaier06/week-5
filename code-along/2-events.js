// To get started:
// 1. add an event listener to the window object, listening for the "DOMContentLoaded" event
// 2. use an anonymous function as the listener
document.addEventListener('DOMContentLoaded', function(event) {
    let clickMeButton = document.querySelector('.click-me-button')
    clickMeButton.addEventListener('click', function(event){
        let outputElement = document.querySelector('.output')
        // outputElement.innerHTML = '<p>Click me! was clicked</p>'
        outputElement.insertAdjacentHTML('beforeend', `
        <p>Click me! was clicked</p>
        `)
    })

    let googleLink = document.querySelector('.google-link')
    googleLink.addEventListener('click', function(event){
        event.preventDefault() //surpress default behavior to re-direct to Google
        console.log(event.target.innerHTML) // grabs the HTML around the Google HTML element

        let outputElement = document.querySelector('.output')
        outputElement.insertAdjacentHTML('beforeend', `
        <p>Google was clicked</p>
        `)
    })

    let nameInput = document.querySelector('#firstName')
    // console.log(nameInput)
    nameInput.addEventListener('keyup', function(event){
        let greetElement = document.querySelector('#greet')

        if (nameInput.value.length > 0) {
        greetElement.innerHTML = `Hi! ${nameInput.value}`
    } else {
        greetElement.innerHTML = ""
    }
    })
})