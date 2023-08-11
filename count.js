function count(str){
    if(str.length == 1){
        return 1;
    }
    else{
        return 1+count(str.slice(1));
    }
}

console.log(count("hola"));
