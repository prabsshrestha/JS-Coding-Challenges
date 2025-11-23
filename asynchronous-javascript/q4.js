// Q4 Parallel Fetch (Promise.all)
async function fetchUsersAndPosts() {
  const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts'
  ];
  const res = await Promise.all(urls.map(u => fetch(u).then(r => r.json())));
  return res.flat();
}

fetchUsersAndPosts().then(result => {
  console.log(result);
});
