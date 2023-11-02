function calcCartVal() {
    let totVal = 0;
    for (let i = 0; i < arguments.length; i++) {
        totVal += arguments[i];
    }
    return totVal;
}
console.log('the cart value is ' + calcCartVal(1,2,4));

