/*Um número palindrômico lê o mesmo nos dois sentidos: 61016
Encontre o maior palíndromo feito com o produto de dois números de três dígitos.*/


let num = 999;
let num2 = 999;
let pali = false;

while(pali == false){
//Revertendo o número 
    arr = Array.from(String(num*num2));
    rever= arr.slice(0).reverse();

//Checando se é um palidrômico
    if(JSON.stringify(arr) == JSON.stringify(rever)){
      pali = true;
      console.log(`${num} x ${num2} = ${num*num2}`)}
      else num2--;

    if(num2 == num -99){
      num--
      num2 = 999
    }
  
}

