const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise(executor) {
  let self = this

  self.state = PENDING
  self.value = null
  self.reason = null
  self.onFulfilledCallbacks = []
  self.onRejectedCallbacks = []

  function resolve(value) {
    if (self.state === PENDING) {
      self.state = FULFILLED
      self.value = value

      self.onFulfilledCallbacks.forEach(onFulfilledCallback => {
        onFulfilledCallback()
      })
    }
  }

  function reject(reason) {
    if (self.state === PENDING) {
      self.state = REJECTED
      self.reason = reason
      self.onRejectedCallbacks.forEach(onRejectedCallback => {
        onRejectedCallback()
      })
    }
  }

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  let self = this

  if (self.state === PENDING) {
    self.onFulfilledCallbacks.push(() => {
      onFulfilled(self.value)
    })
    self.onRejectedCallbacks.push(() => {
      onRejected(self.reason)
    })
  }

  if (self.state === FULFILLED) {
    onFulfilled(self.value)
  }

  if (self.state === REJECTED) {
    onRejected(self.reason)
  }
}

module.exports = MyPromise
