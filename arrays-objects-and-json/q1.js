// Q1 Array Editor
function editArray(arr) {
  const copy = [...arr];
  copy.push(10);
  copy.unshift(5);
  copy.pop();
  copy.splice(1,1);
  return copy;
}
console.log(editArray([1,2,3]))