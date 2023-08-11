// Factorizacion

let originalNum = 60;
let num = 60;
let primos = [2,3,5,7,11,13];
let sum = 0;

for(let i=0; i<primos.length; i++){
    if(num%primos[i] == 0){
        sum += num/primos[i];
        num = num/primos[i];
        i = -1;
    }
}

console.log(sum+originalNum);