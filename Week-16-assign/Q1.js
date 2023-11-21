let input = "Reverse This";
const charInput = [...input];

function reversedString(){
       setTimeout(() => {
       let reversed = charInput.reverse().join("");
       console.log("the reversed string is: ", reversed);
}, 2000);
}
reversedString(input);
