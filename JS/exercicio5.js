//Minha resolução, mas muito pesada

let num = 2;
let lim= 30;
let smalMult=false;

while(smalMult == false){
  for(i=2;i<=lim;i++){
    
    if(num%i !== 0) break
    if(i===lim){smalMult = true
      console.log(num)
    }}
num++}

//Outra resoluçao, mais otimizada


var start = performance.now()

function smallestMultiple(maxNum) {
	let increment = 2;
	let step = 2;
	let smallestNum = 2;

	while (smallestNum <= Number.MAX_SAFE_INTEGER) {
		for (let i = 2; i <= maxNum; i++) {
			let isDivisible = smallestNum % i === 0;

			if (!isDivisible) break;
      if (i === increment) {
				step = smallestNum;
				increment++;}

			if (i === maxNum) return smallestNum;
		}
		smallestNum += step;
	}}
console.log(smallestMultiple(40))
var end = performance.now()
console.log(`Execution time:${end - start} ms`)
