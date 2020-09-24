// Object property shorthand

// const name = 'Andrew'
// const age = 27

// const user = {
//   name: name,
//   age: age,
//   location: 'Piladelphia'
// }

// const user = {
//   name,
//   age,
//   location: 'Piladelphia'
// }

// console.log(user)


// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label, stock} = product
// console.log(label, stock)

// // rename
// const {label:productLabel} = product
// console.log(productLabel)

// const {rating = 5} = product;
// console.log(rating)
// console.log(product)


//----------------------------------------------------------------

const transaction = (type, {label, stock}) => {
  console.log(type, label, stock)
}

transaction('order', product)