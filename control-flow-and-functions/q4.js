// Q4 Sum All (rest parameters)
function sumAll(...nums) {
  return nums.reduce((s,n) => s + n, 0);
}
console.log(sumAll(1,2,3,4,5))