let response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
console.log(await response.json());