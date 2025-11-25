// Q1 Throw Custom Error
function validateAge(age) {
  if (age < 0) 
    throw new Error('InvalidAgeError: age must be >= 0');
  return true;
}

try {
  console.log(validateAge(-1));
} catch (err) {
  console.error(err.message);
}
