//http://api.weatherstack.com/current?access_key=2ee5c61a10e9160ce5f1c2d90954f001&query=37.8267,-122.4233
// access_key
// 위도와 경도

// const request = require('request');

// const weatherUrl = 'http://api.weatherstack.com/current?access_key=2ee5c61a10e9160ce5f1c2d90954f001&query=37.8267,-122.4233'

// // request({url: weatherUrl}, (error, response) => {
// //   const data = JSON.parse(response.body);
// //   console.log(data.current)
// // })

// request({url: weatherUrl, json: true}, (error, response) => {

//   if (error) {
//     console.log('Unable to connect to weather service!')
//   } 
//   else if (response.body.error) {
//     console.log('Unable to find location.')
//   }
//   else {
//     let current = response.body.current
//     let curDescription = current.weather_descriptions;
//     let curTemp = current.temperature;
//     let curFeel = current.feelslike;
//     console.log(curDescription[0])
//     console.log('This is currently ' + curTemp + ' degrees out.')
//     console.log('It feels like ' + curFeel + ' degrees out.')
//   }
// })

// Geocording ----------------------------------------------------------------
// address -> lat/long -> weather

// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZG9uZ29jIiwiYSI6ImNrZmVyazJhazA3b2Yyc25wbDZpdHNtZ3YifQ.r4YccHQ6QJ-zyEu_-71k-w&limit=1';

// request({url:geoUrl, json:true}, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to location service!')
//   } 
//   else if (!response.body.features.length) {
//     console.log('Unable to find location. Try another search.')
//   } 
//   else {
//     let data = response.body.features[0].center;
//     let latitude = data[1];
//     let longitude = data[0];
//     console.log(`latitude: ${latitude}, longitude: ${longitude}`);
//   }
// })

//----------------------------------------------------------------

const geocode = require('./utils/geocode.js')


// geocode('Philadelphai', (error, data) => {
//   if (error) {
//     console.log('Error:', error);
//   } 
//   else {
//     console.log(data)
//   }
// })

//----------------------------------------------------------------

const forecast = require('./utils/forecast.js')

// forecast(-75.7088, 44.1545, (error, data) => {
//   if (error) {
//     console.log(error)
//   }
//   else {
//     console.log(data)
//   }
// })

//---------------------------------callback hell--------------------------------------

// let address = process.argv[2]

// if (!address) {
//   console.log('Please provide an address.')
// } else {
//   geocode(address, (error, locationData) => {
//     if (error) {
//       return console.log('Error:', error);
//     } 
//     else {
//       console.log(locationData)
//       forecast(locationData.longitude, locationData.latitude, (error, forecastData) => {
//         if (error) {
//           return console.log(error)
//         }
//         else {
//           console.log(forecastData)
//         }
//       })
//     }
//   })
// }

//-------------------------------------refactoring----------------------------------
let address = process.argv[2]

if (!address) {
  console.log('Please provide an address.')
} else {
  // default function parameters // to prevent undefined
  geocode(address, (error, {longitude, latitude, location} = {}) => {
    if (error) {
      return console.log('Error:', error);
    } else {
      console.log(location)
      forecast(longitude, latitude, (error, forecastData) => {
        if (error) {
          return console.log(error)
        } else {
          console.log(forecastData)
        }
      })
    }
  })
}
