async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("exiting API fetch");
    }
}

fetchData();
"https://jsonplaceholder.typicode.com/todos/1"
"https://jsonplaceholder.typicode.com/posts/1"