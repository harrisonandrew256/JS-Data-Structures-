function PrimeNumber(num) {
    if(num < 2) return false;
    for (var z = 2; z < num; z++) {
        if(num%z==0)
            return false;
    }
    return true;
}
var array=[];
for(z = 0; z < 101; z++){
    if(PrimeNumber(z)) 
	array.push(z);}
console.log(array);