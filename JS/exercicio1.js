/*function somaMult(cont){
  let soma = 0;
  for (let num = 2; num < cont; num++){
    if(Multiplo(num)) {
      soma+=num
  }}
  console.log(soma) };

function Multiplo(num){
  a = num % 3
  b = num % 5
  if(a === 0 || b === 0 ){
     return true 
  }};

somaMult(5000000)*/

//Acima 1° tentativa; abaixo otimizado

function Mult(num){
  let soma = 0;
 for(i=1; i < num; i++){
  if(i%3 == 0 || i%5 == 0){
    soma+=i
  }}; 
  console.log(soma)
}

Mult(794)

//PS: Dá pra tirar a função; mas achei + pratico assim