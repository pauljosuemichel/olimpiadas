let N = 2;
let key = "23";
let lengthT = 34;
let text = "YO HE LOGRADO ENCENDER UNA CERILLA";
let alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let response = "";
let q;

function nopEspacios(){
    text = text.split(/\s+/).join('');
}

function texto(){
    for(q = 0; q<lengthT; q++){
        codificador(q);
        console.log(codificador());
    }
}

function codificador(index){
    let desplazamiento = Number(key[index%N]);

    for(let i=text.indexOf(text[q]); i<alphabet.length; i++){
        if(i > 27){
            i = 0;
        }
        response += alphabet[i+desplazamiento];
    }
    return response;
}

console.log(texto());
//console.log(response);