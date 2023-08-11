// Codificador Cesar

let alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let message = "YO HE LOGRADO ENCENDER UNA CERILLA";
let N = 2;
let key1 = 2;
let key2 = 3;
let response = "";

message = message.split(/\s+/).join('');


for(let i=0; i<message.length; i+=N){
  response += alphabet[(alphabet.indexOf([message[i]])+key1)%alphabet.length];
  if(message.length-1 >= i+1){
    response += alphabet[(alphabet.indexOf([message[i+1]])+key2)%alphabet.length];
  }
}
    
  
console.log(response);