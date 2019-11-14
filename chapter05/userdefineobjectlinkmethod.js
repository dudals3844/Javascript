function HelloFunc() {
    this.greeting = "hello";
}

HelloFunc.prototype.call = function (func) {
    func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function (greeting) {
    console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();

function saySomthing(obj, methodName, name) {
    return (function(greeting){
        return obj[methodName](greeting, name);
    });
}

function newObj(obj, name) {
    obj.func = saySomthing(this,"who",name);
    return obj;
}

newObj.prototype.who = function(greeting, name){
    console.log(greeting + " " + (name || "everyone"));
}

var obj = new newObj(objHello,"choi");
obj.func = saySomthing(this,"who",name);
return obj;