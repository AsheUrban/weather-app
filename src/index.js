import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import WeatherService from "./weather-service";

// Business Logic
function getWeather(city) {
  let promise = WeatherService.getWeather(city);
  promise.then(function(weatherDataArray) {
    printElements(weatherDataArray);
  }, function(errorArray) {
    printError(errorArray);
  });
}

// UI Logic

function printElements(results) {
  document.querySelector('#showResponse').innerText = `The Humitdity in ${results[1]} is ${results[0].main.humidity}%.
  The temperature in Kelvins is ${results[0].main.temp} degrees.`;
}

function printError(error) {
  document.querySelector('#showResponse').innerText =  `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getWeather(city);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});

  