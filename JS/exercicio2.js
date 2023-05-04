/*Considere os termos na sequência de Fibonacci cujos valores não excedem quatro milhões,
encontre a soma dos termos com valor par.*/ 
 
let limit = 4000000;
let sum = 0;
let a = 1;
let b = 1;
let c = a+b; 

/*Observando a sequência Fibonacci percebe-se que os os números pares aparecem
 a cada 3 casas na sequência, seguindo por essa logica podemos somar 
 apenas um em cada três números: */

while(c < limit){
    sum+=c
    a=b+c
    b=c+a
    c=a+b
  };
  console.log(sum)
