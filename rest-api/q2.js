// Q2 Create Post (POST)
async function createPost(title, body) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body })
  });
  return await res.json();
}
createPost("Hello", "World").then(
    result => {
            console.log(result);
    });

