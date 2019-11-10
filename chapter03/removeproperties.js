var foo = {
    name: 'foo',
    nickname: 'babo'
};

console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);

delete foo;
//delete는 propertie만 삭제한다 즉 Object는 삭제되지 않는다.
console.log(foo.name);