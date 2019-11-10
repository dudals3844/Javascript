var add = function sum(x,y){
    return x + y;
}

console.log(add(1,2));

//error
//console.log(sum(2,3));

var factorialVar = function factorial(n){
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorialVar(4));