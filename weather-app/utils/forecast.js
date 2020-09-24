const request = require('request');

const forecast = (longitude, latitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=2ee5c61a10e9160ce5f1c2d90954f001&query=' + latitude + ',' + longitude;

  request({url, json:true}, (error, {body}) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    }
    else if (body.error) {
      callback('Unable to find location.', undefined);
    }
    else {
      let current = body.current
      let curDescription = current.weather_descriptions;
      let curTemp = current.temperature;
      let curFeel = current.feelslike;
      callback(undefined, `${curDescription[0]}, This is currently ${curTemp} degrees out. It feels like ${curFeel} degrees out.` )
    }
  })
}

module.exports = forecast;