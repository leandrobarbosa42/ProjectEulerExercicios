let num = 999;
let num2 = 999;
let pali = false;

while(pali == false){
  
    arr = Array.from(String(num*num2));
    comp= arr.slice(0).reverse();
     
    if(JSON.stringify(arr) == JSON.stringify(comp)){
      pali = true;
      console.log(`${num} x ${num2} = ${num*num2}`)}
      else num2--;

    if(num2 == num -99){
      num--
      num2 = 999
    }
  
}

/*
outro metodo

var start = performance.now()

function isPali(a,b){
  arr = Array.from(String(a*b));
  comp= arr.slice(0).reverse(); 
  if(JSON.stringify(arr) == JSON.stringify(comp))
  return a*b};
  
let Mpali= 0;

for(i=9999; i>1000;i--){
  for(j=9999; j>1000;j--){
    if(isPali(i,j) >= Mpali){
      Mpali=i*j}
    if(i*j <= Mpali) break
  }
  
}
  
  
console.log(Mpali)
//
var end = performance.now()
console.log(`Execution time:${end-start}`)
*/