//Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.


function Mult(num){
  let soma = 0;
 for(i=1; i < num; i++){
  if(i%3 == 0 || i%5 == 0){
    soma+=i
  }}; 
  console.log(soma)
}

Mult(1000)

