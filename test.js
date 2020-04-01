let MyPromise = require('./MyPromise')

let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(123)
  }, 1000);
})

promise.then(
  function(value) {
    console.log('value1', value)
  },
  function(reason) {
    console.log('reason1', reason)
  }
)

promise.then(
  function(value) {
    console.log('value2', value)
  },
  function(reason) {
    console.log('reason2', reason)
  }
)
