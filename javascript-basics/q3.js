// Q3 Truthy/Falsy
function truthyFilter(arr) {
  const res = [];
  for (const v of arr) {
    if (v) res.push(v);
  }
  return res;
}

console.log(truthyFilter([1, "hi", null]))