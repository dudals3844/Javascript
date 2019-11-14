function outerFunc(argNum) {
    var num = argNum;
    return function (x) {
        num += x;
        console.log('num: ' + num);
    }
}
var exam = outerFunc(40);
exam(5);
exam(-10);
//////////////////
//one closure in many functions scope chain

function func() {
    var x = 1;
    return{
        func1: function () {
            console.log(++x);
        },
        func2: function () {
            console.log(-x);
        }
    };
};

var exam = func();
exam.func1();
exam.func2();