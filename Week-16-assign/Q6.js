const linkedInProfileRegex = '^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$';

const flag = 'i'
let regExp = new RegExp(linkedInProfileRegex, flag);

let url = 'https://www.linkedin.com/in/mithun-s-83a8a3186/'

const validateLinkdin = (url) => {
    regExp.test(url);
}

if(validateLinkdin){
    console.log(`${url} is a valid LinkdIn URL`);
}
else{
    console.log(`${url} is not a valid LinkdIn URL`);
}