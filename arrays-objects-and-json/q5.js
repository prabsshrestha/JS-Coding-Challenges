// Q5 Shallow vs Deep Copy 
function copy() {
  const original = {
    name: "Prabesh",
    address: { city: "Kathmandu" }
  };
  const shallow = { ...original };
  const deep = JSON.parse(JSON.stringify(original));
  shallow.address.city = "Pokhara";
  deep.address.city = "Lalitpur";

  console.log("Original:", original);
  console.log("Shallow Copy:", shallow);
  console.log("Deep Copy:", deep);
}
copy();