// 1. signup for an api key https://weatherapi.com
// 2. find the "Chicago" city button using querySelector() and add a click event listener
// 3. when event occurs (i.e. inside the listener function):
//    a. find the forecast header (use the selector .forecast-header) and modify its innerHTML to `${location} Forecast`
//    b. fetch the api response from https://api.weatherapi.com/v1/forecast.json?key=YOUR_KEY&q=LOCATION&days=3
//    c. extract the json using the .json() function
//    d. find the array of daily forecast data, loop through it and, insert HTML with each day's forecast using the forecastHTML() function
// 4. repeat step 2 & 3 for each city button
// 5. (optional OR skip to step 6) once you notice the repetition, you can refactor to use the querySelectorAll() function to find and loop 
//    through each city button and add the event listener and function (step 3)
// 6. add a submit event listener to the form
//    a. get the user-entered location from the input
//    b. find the forecast header (use the selector .forecast-header) and modify its innerHTML to `${location} Forecast`
//    c. fetch the api response from https://api.weatherapi.com/v1/forecast.json?key=YOUR_KEY&q=LOCATION&days=3
//    d. extract the json using the .json() function
//    e. find the array of daily forecast data, loop through it and, insert HTML with each day's forecast using the forecastHTML() function

function forecastHTML(dailyForecast) {
  return `
    <div class="text-center space-y-2">
      <img src="https:${dailyForecast.day.condition.icon}" class="mx-auto">
      <h1 class="text-2xl text-bold text-gray-500">${dailyForecast.date}</h1>
      <h2 class="text-xl">${dailyForecast.day.mintemp_f} - ${dailyForecast.day.maxtemp_f}</h2>
      <p class="text-gray-500">${dailyForecast.day.condition.text}</h1>
    </div>
  `
}

// You may want to write other functions, but you don't need to!
// All your code can go inside of this event listener ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
window.addEventListener('DOMContentLoaded', function() {
  // Your code ...
  
  let chicago = document.querySelector('#chicago-forecast')
  chicago.addEventListener('click', async function(event){
    event.preventDefault()
    
    let location = 'Chicago' 
    document.querySelector('.forecast-header').innerHTML = `${location} forecast`
    
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=${location}&days=3`)
    let json = await response.json()
    // console.log(json)
    
    document.querySelector('.forecast').innerHTML = '' // clearing any existing forecast HTML from previous click
    let forecast = json.forecast.forecastday
    for (i = 0; i < forecast.length; i++) {
      let dailyForecast = forecast[i]
      console.log(dailyForecast);
      document.querySelector('.forecast').insertAdjacentHTML('beforeend', forecastHTML(dailyForecast))
    }
  })
  let losAngeles = document.querySelector('#los-angeles-forecast')
  losAngeles.addEventListener('click', async function(event){
    event.preventDefault()
    
    let location = 'Los Angeles' 
    document.querySelector('.forecast-header').innerHTML = `${location} forecast`
    
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=${location}&days=3`)
    let json = await response.json()
    // console.log(json)
    
  document.querySelector('.forecast').innerHTML = '' // clearing any existing forecast HTML from previous click
    let forecast = json.forecast.forecastday
    for (i = 0; i < forecast.length; i++) {
      let dailyForecast = forecast[i]
      console.log(dailyForecast);
      document.querySelector('.forecast').insertAdjacentHTML('beforeend', forecastHTML(dailyForecast))
    }
  })
  let paris = document.querySelector('#paris-forecast')
  paris.addEventListener('click', async function(event){
    event.preventDefault()
    
    let location = 'Paris' 
    document.querySelector('.forecast-header').innerHTML = `${location} forecast`
    
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=${location}&days=3`)
    let json = await response.json()
    // console.log(json)
    
    document.querySelector('.forecast').innerHTML = '' // clearing any existing forecast HTML from previous click
    let forecast = json.forecast.forecastday
    for (i = 0; i < forecast.length; i++) {
      let dailyForecast = forecast[i]
      console.log(dailyForecast);
      document.querySelector('.forecast').insertAdjacentHTML('beforeend', forecastHTML(dailyForecast))
    }
  })
  let moscow = document.querySelector('#moscow-forecast')
  moscow.addEventListener('click', async function(event){
    event.preventDefault()
    
    let location = 'Moscow' 
    document.querySelector('.forecast-header').innerHTML = `${location} forecast`
    
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=${location}&days=3`)
    let json = await response.json()
    // console.log(json)
    
    document.querySelector('.forecast').innerHTML = '' // clearing any existing forecast HTML from previous click
    let forecast = json.forecast.forecastday
    for (i = 0; i < forecast.length; i++) {
      let dailyForecast = forecast[i]
      console.log(dailyForecast);
      document.querySelector('.forecast').insertAdjacentHTML('beforeend', forecastHTML(dailyForecast))
    }
  })
  let NYC = document.querySelector('#new-york-city-forecast')
  NYC.addEventListener('click', async function(event){
    event.preventDefault()
    
    let location = 'New York City' 
    document.querySelector('.forecast-header').innerHTML = `${location} forecast`
    
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=${location}&days=3`)
    let json = await response.json()
    // console.log(json)
    
    document.querySelector('.forecast').innerHTML = '' // clearing any existing forecast HTML from previous click
    let forecast = json.forecast.forecastday
    for (i = 0; i < forecast.length; i++) {
      let dailyForecast = forecast[i]
      console.log(dailyForecast);
      document.querySelector('.forecast').insertAdjacentHTML('beforeend', forecastHTML(dailyForecast))
    }
  })
  let rome = document.querySelector('#rome-forecast')
  rome.addEventListener('click', async function(event){
    event.preventDefault()
    
    let location = 'Rome' 
    document.querySelector('.forecast-header').innerHTML = `${location} forecast`
    
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=${location}&days=3`)
    let json = await response.json()
    // console.log(json)
    
    document.querySelector('.forecast').innerHTML = '' // clearing any existing forecast HTML from previous click
    let forecast = json.forecast.forecastday
    for (i = 0; i < forecast.length; i++) {
      let dailyForecast = forecast[i]
      console.log(dailyForecast);
      document.querySelector('.forecast').insertAdjacentHTML('beforeend', forecastHTML(dailyForecast))
    }
  })
  let tokyo = document.querySelector('#tokyo-forecast')
  tokyo.addEventListener('click', async function(event){
    event.preventDefault()
    
    let location = 'Tokyo' 
    document.querySelector('.forecast-header').innerHTML = `${location} forecast`
    
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=${location}&days=3`)
    let json = await response.json()
    // console.log(json)
    
    document.querySelector('.forecast').innerHTML = '' // clearing any existing forecast HTML from previous click
    let forecast = json.forecast.forecastday
    for (i = 0; i < forecast.length; i++) {
      let dailyForecast = forecast[i]
      console.log(dailyForecast);
      document.querySelector('.forecast').insertAdjacentHTML('beforeend', forecastHTML(dailyForecast))
    }
  })
  let singapore = document.querySelector('#singapore-forecast')
  singapore.addEventListener('click', async function(event){
    event.preventDefault()
    
    let location = 'Singapore' 
    document.querySelector('.forecast-header').innerHTML = `${location} forecast`
    
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=${location}&days=3`)
    let json = await response.json()
    // console.log(json)
    
    document.querySelector('.forecast').innerHTML = '' // clearing any existing forecast HTML from previous click
    let forecast = json.forecast.forecastday
    for (i = 0; i < forecast.length; i++) {
      let dailyForecast = forecast[i]
      console.log(dailyForecast);
      document.querySelector('.forecast').insertAdjacentHTML('beforeend', forecastHTML(dailyForecast))
    }
  })
  //   // 5. (optional) once you notice the repetition, you can refactor to use the querySelectorAll() function to find and loop through each city button and add the event listener and function (step 3)

  // // find all the location buttons using querySelectorAll and a selector matching all of the desired elements
  // let allLocationButtons = document.querySelectorAll('.forecast-button')

  // // loop through each city button
  // for (let i = 0; i < allLocationButtons.length; i++) {
  //   let locationButton = allLocationButtons[i];
    
  //   // add the event listener and function (step 3)

  //   locationButton.addEventListener('click', async function(event) {
  //     event.preventDefault() // supress the browser's default click behavior

  //     // get the location of the clicked element using event.target
  //     let location = event.target.innerHTML
  //     let forecastHeader = document.querySelector('.forecast-header')
  //     forecastHeader.innerHTML = `${location} Forecast`

  //     let apiKey = '' // <<<< fill in with your api key from step 1 (or the api key we provided)
  //     let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`)
  //     let json = await response.json()
  //     let days = json.forecast.forecastday // find the array within the data

  //     document.querySelector('.forecast').innerHTML = '' // clearing any existing forecast html from a previous click

  //     // looping through the array
  //     for (let i = 0; i < days.length; i++) {
  //       let day = days[i]

  //       // inserting html with each day's forecast using the forecastHTML() function we provided/wrote for you (defined above)
  //       let forecastDiv = document.querySelector('.forecast')
  //       let html = forecastHTML(day)
  //       forecastDiv.insertAdjacentHTML('beforeend', `${html}`)
  //     }
  //   })
  // }
    // 6. add a submit event listener to the form
  
  // find the form
  let locationForm = document.querySelector('.weather-form')
  // add event listener on submit
  locationForm.addEventListener('submit', async function(event) {
    event.preventDefault() // supress the browser's default click behavior
    //    a. get the user-entered location from the input
    // find the input element
    let locationInput = document.querySelector('#location')
    // get the user-submitted value
    let locationInputValue = locationInput.value
    // console.log(locationInputValue) // uncomment this line to optionally see in console what the user-entered location is
    //    b. find the forecast header (use the selector .forecast-header) and modify its innerHTML to `${location} Forecast`
    let forecastHeader = document.querySelector('.forecast-header')
    forecastHeader.innerHTML = `${locationInputValue} Forecast`
    //    c. fetch the api response from https://api.weatherapi.com/v1/forecast.json?key=YOUR_KEY&q=LOCATION&days=3
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=${locationInputValue}&days=3`)
    // NOTE: adding ^^^ await means we also need to add async to the event listener function above on line 23
    //    d. extract the json using the .json() function
    let json = await response.json()
    //    e. find the array of daily forecast data, loop through it and, insert HTML with each day's forecast using the forecastHTML() function
    document.querySelector('.forecast').innerHTML = '' // clearing any existing forecast html from a previous click
    let forecast = json.forecast.forecastday
    for (i = 0; i < forecast.length; i++) {
      let dailyForecast = forecast[i]
      console.log(dailyForecast);
      document.querySelector('.forecast').insertAdjacentHTML('beforeend', forecastHTML(dailyForecast))
    }
  })
})
