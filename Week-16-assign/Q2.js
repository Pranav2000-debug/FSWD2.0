function randNum(){
    return Math.floor(Math.random() * 100);
}
// console.log(randNum());

function generateAfterDelay(seconds){
    console.log(`The number will display after ${seconds} seconds`);
    const countInterval = setInterval(() => {
        console.log(`${seconds}`);
        seconds--;

        if(seconds === 0){
            clearInterval(countInterval);
            console.log(randNum());
        }
    }, 1000);
}

generateAfterDelay(3);
