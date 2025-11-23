// Q2 filter adults
function filterAdults(users) {
  return users.filter(u => u.age >= 18);
}

console.log(filterAdults([
  { name: "A", age: 17 },
  { name: "B", age: 20 }
]));
