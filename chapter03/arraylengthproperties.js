var arr = [];
console.log(arr.length);

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;


arr[100] = 100;
console.log(arr.length);

//배열의 크기 명시젇 변경
arr.length = 50;
console.log(arr[100]);