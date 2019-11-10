var arr = ['zero','one','two'];

for (var prop in arr) {
    console.log(prop,arr[prop]);
}

for (let i = 0; i < arr.length; i++) {
    console.log(i,arr[i]);
}