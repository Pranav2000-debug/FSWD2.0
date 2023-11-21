const urlPattern = /^(https?:\/\/)?([\da-z]+([.-]?[\da-z]+)*\.(com|net|org|io|gov|edu|co|uk|ca|de|jp|fr|au|us)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?)$/i;
const testUrl = "https://pwskills.com"

function isValidUrl(input){
    return urlPattern.test(input);
}

if(isValidUrl(testUrl)){
    console.log(`${testUrl} is a valid URL`);
}
else{
    console.log(`${testUrl} is not a valid URL`);
}
