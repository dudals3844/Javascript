function outerFunc(arg1, arg2) {
    var local = 8;
    function innerFunc(innerArg) {
        console.log((arg1 + arg2)/(innerArg + local));
    }
    return innerFunc;

    
}

//outerFunc과 innerFunc의 매개변수를 다 같이 가진다.
var exam1 = outerFunc(2,4);
exam1(2);