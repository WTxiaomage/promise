let MyPromise = require('./MyPromise')

let promise = new MyPromise((resolve, reject) => {
  resolve(123)
})

promise.then(
  function(value) {
    console.log('value', value)
  },
  function(reason) {
    console.log('reason', reason)
  }
)
