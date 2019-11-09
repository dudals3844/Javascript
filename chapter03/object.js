//Create empty object
var foo = new Object();

//Object foo properties
foo.name = 'choi';
foo.age = 23;
foo.gender = 'male';

console.log(typeof foo);
console.log(foo);

var foo2 = {
    name: 'choi',
    age: 24,
    gender: 'male'
};

console.log(foo2);

foo2.major = 'computer science';
console.log(foo2.major);
console.log(foo2['major']);

foo2.age = 30;
console.log(foo2.age);

foo2['full-name'] = 'foo var';
console.log(foo2['full-name']);
console.log(foo.full);