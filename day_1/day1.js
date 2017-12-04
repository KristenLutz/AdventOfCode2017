
const fs = require('fs');
const inputFile = fs.readFileSync('input.txt').toString();
const len = inputFile.length;
let total = 0;

for (i=0; i<inputFile.length;i++){
	// console.log(inputFile[i]);
	comparator = len/2+i;

	if(comparator >= len){
		comparator -= len;
	}


	if(inputFile[comparator]===inputFile[i]){
		total+=parseInt(inputFile[i]);
	}
}

console.log(total)

