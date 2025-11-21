// Q4 Safe division (Explicit type Conversion)
function divide(a,b){
    const na = Number(a);
    const nb = Number(b);
    if(Number.isNaN(na) || Number.isNaN(nb) || nb === 0)
        return 'Invalid';
    return na/nb;
}

console.log(divide(4,0));