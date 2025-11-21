//Q5 Variable Scope
function scopeDemo() {
  function fn() {
    var x = 'var'; 
    let y = 'let'; 
    const z = 'const'; 
    if (true) {
      var x2 = 'var-in-block';
      let y2 = 'let-in-block';
      const z2 = 'const-in-block';
      console.log('inside block:', x2, y2, z2);
    }
    console.log('inside function:', x, y, z);
  }
  fn();
}
scopeDemo();