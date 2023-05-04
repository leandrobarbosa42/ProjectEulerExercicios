
var start = performance.now()

function isPrime(p) {
  for (let i = 2; i * i <= p; i++) {
    if (p % i === 0) return false;
  }
  return true;}


console.log(isPrime(13951))

var end = performance.now()
console.log(`Execution time:${end - start} ms`)
