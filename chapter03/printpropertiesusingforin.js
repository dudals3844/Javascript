//key value와 비슷하다.
var foo = {
    name: 'choi',
    age: 20,
    major: 'computer science'
};

var prop;
for(prop in foo){
    console.log(prop,foo[prop]);
}