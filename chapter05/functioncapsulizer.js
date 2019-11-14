var bufferAr = [
    'I am ',
    '',
    ' I live in ',
    '',
    '. I\am',
    '',
    'years old',
];

function getCompletedStr(name, city, age) {
    bufferAr[1] = name;
    bufferAr[3] = city;
    bufferAr[5] = age;

    return bufferAr.join('');
}

var str = getCompletedStr('choi','seoul',16);
console.log(str);

