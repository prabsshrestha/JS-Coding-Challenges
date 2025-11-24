// Q2 Object Destructure & Rename
function extract(obj) {
  const { firstName: name, address: { city } = {} } = obj;
  return { name, city };
}
console.log(
    extract(
        { firstName: "John", address: { city: "Kathmandu" } }
    )
)