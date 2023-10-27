const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];
let arrlen = arr.length;
for(let i = 0; i < arrlen; i++) {
    if(typeof arr[i] == "string") {
        console.log(`Found the first string: ${arr[i]}`);
        break;
    }
}