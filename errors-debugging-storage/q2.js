// Q2 Async Error Handler (invalid URL)
async function fetchInvalid() {
  try {
    await fetch('https://invalid.invalid/url');
    return 'OK';
  } catch (e) {
    return 'Failed';
  }
}
fetchInvalid().then(result => {
  console.log(result);
});