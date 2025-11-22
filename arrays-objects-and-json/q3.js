// Q3 Dynamic Keys
function createUser(id, name, age) {
  return {
    ['user_id']: id,
    ['user_name']: name,
    ['user_age']: age
  };
}
console.log(createUser(1, "Prabesh", 24));
