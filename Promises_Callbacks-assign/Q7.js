async function getCombinedData() {
    try {
        const [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1'),
        ]);
           
        if (!todoResponse.ok || !postResponse.ok) {
            throw new Error('Failed to fetch data');
        }

        const [data1, data2] = await Promise.all([
            todoResponse.json(),
            postResponse.json(),
        ]);

        const combinedData = {
            todo: data1,
            post: data2
        };

        console.log(combinedData);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getCombinedData();