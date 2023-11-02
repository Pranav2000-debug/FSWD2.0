function wordCounter(sentence){
    const wordMap = new Map();
    
    const words = sentence.split(/\s+/);
    for (const word of words) {
        const newWord = word.toLowerCase().replace(',', '');
        if(newWord.length>0){
            wordMap.set(newWord, (wordMap.get(newWord) || 0) + 1)
            /*
            (wordMap.get(newWord) || 0) uses the logical OR (||) operator to provide a default value of 0 when wordMap.get(newWord) is undefined. This is a common JavaScript pattern to handle the case when a key is not yet in the map.
            (wordMap.get(newWord) || 0) + 1 increments the count of newWord by 1. If newWord already exists in the map, it adds 1 to the existing count; otherwise, it initializes the count to 1. 
            */
        }
    }
return wordMap;
}


const sentence = "please please submit your assignment on time, your assignments are important ";
const result = wordCounter(sentence);
console.log(result);
