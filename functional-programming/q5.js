// Q5 Chained Transformation 
function chainTransform(arr) {
  return arr.filter(x => x % 2 === 0)
            .map(x => x*x)
            .reduce((a,b)=>a+b,0);
}
console.log(chainTransform([1,2,3,4]));
