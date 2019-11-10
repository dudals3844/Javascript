var colorArray = ['orange','yellow', 'red'];
console.log(colorArray[0]);
console.log(colorArray[1]);
console.log(colorArray[2]);

var colorObject = {
    '0':'orange',
    '1':'yellow',
    '2':'green'
};

console.log(colorObject[0]);
console.log(colorObject[1]);
console.log(colorObject[2]);

console.log(typeof colorArray);
console.log(typeof colorObject);

//Object와  Array의 prototype객체가 다르다.
console.log(colorArray.length);
console.log(colorObject.length);

colorArray.push('red');
//colorObject.push('red');
