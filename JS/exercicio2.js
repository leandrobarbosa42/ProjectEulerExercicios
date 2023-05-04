 
 /*let fibo = [1,2];
 let lim = 4000000;
 let soma = 0;

 while (fibo[fibo.length -1] < lim){
  
   let num = fibo[fibo.length -1] 
   let num2 = fibo[fibo.length-2]
   if (num + num2 < lim)
   fibo.push(num + num2)
   else break 
   
 }; console.log(fibo)
  
  fibo.forEach(num => {
    if(num%2 ==0){
      soma+=num
    }}); 
    console.log(soma) */

//Metodo mais otimizado
//Seguindo a logica de que os pares aparecem a cada 3 casas na sequencia

let limit = 4000000;
let sum = 0;
let a = 1;
let b = 1;
let c = a+b; 

while(c < limit){
    sum+=c
    a=b+c
    b=c+a
    c=a+b
  };
  console.log(sum)
