//myObject가 class느낌인듯
var myObject = {
    name:'foo',
    sayName:function () {
        console.log(this.name);
    }
};


var otherObject = {
    name: 'bar'
};

otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();