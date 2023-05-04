//Minha versão
/*function NumPrimo(div) {
  for(i = 2; i < Math.floor(div/2)+1; i++){
      
  if(div% i === 0) return 2}
  if(true) return 1}

let a = 600851475143;
let b = 2;
let last=1;
while(a > 1){
  if(a%b === 0 && NumPrimo(b) == 1 ){
    a=a/b
    r=b
  } else b++
};

console.log(a,r)*/

//Versão do site

let n=600851475143;
if(n%2 == 0){
  n=n/2
  lastFator=2
  while(n%2 == 0){
    n=n/2
  }}
  else lastFator=1;
  let fator = 3;
  
  while(n>1){
    if(n%fator == 0){
      n=n/fator
      lastFator=fator
      while(n%fator == 0){
        n=n/fator
      }}fator+=2
  };
  console.log(lastFator)

  //-----------Minha versão aprimorada, com base na do site

  var start = performance.now()

let a = 600851475143;
let b = 3;
let last=1;

if(a%2 === 0){
  a=a/2
  last=2
  while(a%2 === 0){
    a=a/2
  }}; 

while(a > 1){
  if(a%b === 0){
    a=a/b
    r=b
    while(a/b ===0){
      a=a/b
    }} else b+=2
};

var end = performance.now()
console.log(r,"  ",`Execution time:${end - start} ms`)

