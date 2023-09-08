let N = 1000;
let N1 = 1000;
let S = N;
let S1 = N;
let prim = [2,3,5,7,11,13,17,19,23];
let divMin = [];

function agustin(){
    for(let i=0; i<prim.length; i++){
        if(N > 0 && N%prim[i] == 0){
            S += N/prim[i];
            N /= prim[i];
            i = -1
        }
    }
}

function divMinSearch(){
    for(let b=0; b<prim.length; b++){
        if(N1%prim[b] == 0){
                divMin.push(prim[b]);
        }
    }
}
divMinSearch();

function gaston(){
    for(let i=0; i<prim.length; i++){
        if(N1 > 0 && divMin.length >= 1){
            S1 += N1/Math.max(...divMin);
            N1 /= Math.max(...divMin);
            divMin = [];
        }
        divMinSearch()
    }
}

agustin();
gaston();
console.log(S, S1);