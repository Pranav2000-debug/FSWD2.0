function uniqueCharactersCheck(inputString) {
   const charSet = new Set();
   for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i]
    if(charSet.has(char))
    {
        console.log("Duplicate");
        return false
    }
    charSet.add(char);
   }
   console.log("Unique");
   return true;
}
uniqueCharactersCheck("mithun")
uniqueCharactersCheck("anurag")

