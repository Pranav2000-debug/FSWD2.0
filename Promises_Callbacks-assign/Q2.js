function manipulateString(s, callback) {
    const upperCasedString = s.toUpperCase();
    callback(upperCasedString);
}
function logString(manipulatedString) {
    console.log(`The manipulated String is ${manipulatedString}`);
}

manipulateString("hello world", logString);