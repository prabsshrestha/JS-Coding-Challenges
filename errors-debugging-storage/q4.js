// Q4 Storage Setter 
function setStorages() {
  const obj = { theme: 'dark', logged: true };
  localStorage.setItem('app', JSON.stringify(obj));
  sessionStorage.setItem('app', JSON.stringify(obj));
}

setStorages(); 
const result = JSON.parse(localStorage.getItem('app'));
console.log(result.theme); 

