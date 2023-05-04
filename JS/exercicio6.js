
//Encontre a diferença entre a soma dos quadrados dos cem primeiros números naturais e o quadrado da soma.

let Lim=100;
//Somando todos número do intervalo, fórmula: soma(n) = n(n + 1)/2
let QuadradoSoma=Lim*(Lim + 1)/2;

//Usando a fórmula de Faulhaber / Euler somaQd(n) = n*(n+1)*(2*n+1) / 6 
//É possivel calcular a soma dos quadrados mais facilmente
let SomaQuadrado= (2*Lim+1)*(Lim+1)*Lim/6;

//Elevando a soma dos do números do intervalo ao quadrado e subtraindo a soma dos quadrados
console.log(Math.pow(QuadradoSoma, 2)-SomaQuadrado)

