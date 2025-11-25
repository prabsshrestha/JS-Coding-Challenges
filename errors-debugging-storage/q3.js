// Q3 Debugger Demo
function debugLoop(n) {
  for (let i=0;i<n;i++) {
    debugger; 
    console.log(i);
  }
}
debugLoop(3);