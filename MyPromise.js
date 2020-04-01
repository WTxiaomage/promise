const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise(executor) {
  let self = this

  self.state = PENDING
  self.value = null
  self.reason = null

  function resolve(value) {
    if (self.state === PENDING) {
      self.state = FULFILLED
      self.value = value
    }
  }

  function reject(reason) {
    if (self.state === PENDING) {
      self.state = REJECTED
      self.reason = reason
    }
  }

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.then = function(onFuifilled, onRejected) {
  let self = this
  
  if (self.state === FULFILLED) {
    onFuifilled(self.value)
  }

  if (self.state === REJECTED) {
    onRejected(self.reason)
  }



}

module.exports = MyPromise
