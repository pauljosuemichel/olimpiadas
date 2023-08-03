// Codificador Cesar

let alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let message = "YO HE LOGRADO ENCENDER UNA CERILLA";
let rotator1 = 2;
let rotator2 = 3;
let response = "";

message = message.split(/\s+/).join('');


for(let i=0; i<message.length; i+=2){
    response += alphabet[(alphabet.indexOf([message[i]])+rotator1)%alphabet.length];
    if(message.length-1 >= i+1){
      response += alphabet[(alphabet.indexOf([message[i+1]])+rotator2)%alphabet.length];
    }
  }
    
  
  console.log(response);