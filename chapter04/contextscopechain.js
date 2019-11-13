//global variable
var var1 = 1;
var var2 = 2;

function func() {
    //loval variable
    var var1 = 10;
    var var2 = 20;
    console.log(var1);
    console.log(var2);
}

func();
console.log(var1);
console.log(var2);

////////////////////
var value = "value1";


function printValue() {
    return value;
}

console.log(printValue());

function printFunc() {
    var value = "value2";

    function printValue() {
        return value;
    }

    console.log(printValue());
}

printFunc();