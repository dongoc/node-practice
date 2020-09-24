const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=2ee5c61a10e9160ce5f1c2d90954f001&query=40,-75'

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log(error)
})

request.end()