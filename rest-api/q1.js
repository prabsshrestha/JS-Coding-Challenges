// Q1 Fetch Users
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data.map(u => u.name);
}
getUsers().then(result => {
  console.log(result);
})