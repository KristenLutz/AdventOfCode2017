const fs = require('fs');
const inputFile = fs.readFileSync('input.txt').toString().split("\n");
var total = 0;

console.log(inputFile);

for (var i = 0, len = inputFile.length; i < len; i++) {
    items = inputFile[i].split("\t");
    largest = parseInt(items[0]);
    smallest = parseInt(items[0]);
    
    for (var i2 = 0, len2 = items.length; i2 < len2; i2++){
        for (var i3 = 0, len3 = items.length; i3 < len3; i3++){
            if(i2===i3){
                continue
            }
            remainder = parseInt(items[i2])/parseInt(items[i3])
            whole = remainder - Math.floor(remainder)
            if(whole === 0){
                total += remainder
            }
        }
    }
}
console.log(total)