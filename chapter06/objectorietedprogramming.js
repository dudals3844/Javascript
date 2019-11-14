function Person(arg) {
    this.name = arg;

    this.getName = function () {
        return this.name;
    }

    this.setName  = function (value) {
        this.name = value;
    }
}

var me = new Person("choi");
console.log(me.getName());

me.setName("iamyoung");
console.log(me.getName());

