var value = 100;
var myObject = {
    value: 1,
    func1: function () {
        var that = this;
    
        this.value += 1;
        console.log('func1() called this.value' + this.value);
    
        func2 = function () {
            that.value += 1;
            console.log('func2() called this.value:' + that.value);
        
            func3 = function() {
                that.value += 1;
                console.log('func3() called this.value: ' + that.value);
            }
            func3();
        }
        func2();
    }
};