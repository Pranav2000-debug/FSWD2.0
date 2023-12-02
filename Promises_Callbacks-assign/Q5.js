function greet(name) {
    return new Promise(function exec(resolve, reject){
        resolve(`Hello, ${name}!`);
    });
}

let newGreet = greet("Pranav");
newGreet.then((msg) =>{
    console.log(`${msg}`);
})
