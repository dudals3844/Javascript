var add = function sum(x,y){
    return x + y;
}

console.log(add(1,2));

//error
//console.log(sum(2,3));

var factorialVar = function factorial(n){
    return n * factorial(n-1);
    //무한으로 가니까 오류남
}

console.log(factorialVar(4));