// Q3 Count Words (reduce)
function countWords(arr) {
  return arr.reduce((acc, w) => {
    acc[w] = (acc[w] || 0) + 1;
    return acc;
  }, {});
}
console.log(countWords(["apple", "apple", "banana"])
)