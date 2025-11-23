import _ from 'lodash';   

const arr = [1, 2, 3, 4, 5, 6];
const chunked = _.chunk(arr, 2);  
console.log(chunked);
