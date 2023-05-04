//Minha Versão

/*let SumQuad=0;
let QuadSum=Lim*(Lim+1)/2;
let Lim=7000

for(i=0; i<=Lim;i++){
	SumQuad += Math.pow(i, 2)
};

console.log(Math.pow(QuadSum, 2)-SumQuad)*/

//Versão Site

var start = performance.now()

let Lim=1000;
//let SumQuad=0;
let QuadSum=Lim*(Lim + 1)/2;

let SumQuad= (2*Lim+1)*(Lim+1)*Lim/6;

console.log(Math.pow(QuadSum, 2)-SumQuad)

var end = performance.now()
console.log(`Execution time:${end - start} ms`)