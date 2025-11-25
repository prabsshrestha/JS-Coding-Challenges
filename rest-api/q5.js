// Q5 Paginated Loader 
async function loadPages() {
  const [p1, p2] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts?_page=1').then(r=>r.json()),
    fetch('https://jsonplaceholder.typicode.com/posts?_page=2').then(r=>r.json())
  ]);
  return [...p1, ...p2];
}
loadPages().then(result => {
    console.log(result);
})