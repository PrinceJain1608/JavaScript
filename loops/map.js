const arr=[1,2,3,4,5,6,7,8,9,10]
const nums=arr.map( (n) => n+10 )
console.log(nums);

// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
// ]

const myNum=arr
.map( (i) => i*10 )
.map( (i) => i+1 )
.filter( (i) => i>40 )
console.log(myNum);

// [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]