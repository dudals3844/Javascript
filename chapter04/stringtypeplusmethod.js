String.prototype.testMehod = function () {
    console.log('This is the String.prototype.testMethod()');
};

var str = "this is test";
str.testMehod();

console.dir(String.prototype);