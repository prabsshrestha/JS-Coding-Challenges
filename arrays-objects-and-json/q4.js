// Q4 JSON Converter
function safeParse(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    return 'Invalid JSON';
  }
}
console.log(safeParse('{"city":"Kathmandu"}')); // { city: 'Kathmandu' }

console.log(safeParse('{city:"Kathmandu"}')); // Invalid JSON