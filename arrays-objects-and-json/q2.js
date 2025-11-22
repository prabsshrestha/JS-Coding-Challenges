// Q2 Deep Access
function getCity(user) {
    try{
    return user.address.current.city;
    }
    catch(e){
        return 'unknown';
    }
}

console.log(getCity({
  address: {
    current: {
      city: "Kathmandu"
    }
  }
}));

// console.log(getCity({
//   address: {
//       city: "Kathmandu"
//   }
// }));
