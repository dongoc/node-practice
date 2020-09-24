setTimeout(() => {
  console.log('Two seconds are up!')
}, 2000)

const names = ['Andrew', 'John', 'hell'];
const shortNames = names.filter(name => name.length >= 4)

const geoCode = (address, callback) => {
  // NOTE : 아래에 있는 console.log보다 나중에 실행되기 때문에 console.log의 결과값은 undefined가 된다.
  setTimeout(() =>{
    const data = {
      latitude: 0,
      longitude: 0,
    }
    // return data;
    callback(data); // callback을 통해 then으로 연결되는 효과를 얻는다.
  }, 2000)
}

// const data = geoCode('Philadelphia')
// console.log(data) // undefined

geoCode('Philadelphia', (data) => {
  console.log(data)
})


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
  setTimeout(() =>{
    callback(a + b);
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
})