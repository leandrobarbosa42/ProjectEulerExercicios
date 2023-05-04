var start = performance.now()

function isPrime(p) {
  for (let i = 2; i * i <= p; i++) {
    if (p % i === 0) return false;
  }
  return true;}

let primoNum = 1;
let num = 3;
let lim= 10001;
while(primoNum !== lim){
  if(isPrime(num)){
    primoNum++
    num+=2
  } else num+=2
}
console.log(num-2)

var end = performance.now()
console.log(`Execution time:${end - start} ms`)
