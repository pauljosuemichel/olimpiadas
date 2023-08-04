function count(str){
    calls = 0;
    if(str.length == 1){
        return 1;
    }
    else{

        return 1+count(str.slice(1));
    }
}

console.log(count("holamhvjvju"));
console.log(calls);
