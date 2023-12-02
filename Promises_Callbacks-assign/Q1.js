const originalArr = [2,3,4,5];

function callback(num){
    return num * 2;
}

function doubleArray(arr, callback) {
    const doubledArr = [...arr].map(callback);
    return doubledArr;
}

console.log(doubleArray(originalArr, callback));

