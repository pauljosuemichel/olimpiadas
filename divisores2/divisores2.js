let N = 12;
let S = N;
let prim = [2,3,5,7,11,13,17,19];

function agustin(){
    for(let i=0; i<prim.length; i++){
        if(N < 0 && N%prim[i] == 0){
            S += N/prim[i];
            N /= prim[i];
        }
    }
}

function gaston(){
    for(let i=0; i<prim.length; i++){
        if(N < 0 && N%prim[i] == 0){
            S += N/prim[i];
            N /= prim[i];
        }
    }
}

console.log(agustin(), gaston());