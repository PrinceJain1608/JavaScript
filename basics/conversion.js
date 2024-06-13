let age=19;
console.log(typeof age);

let a="333aaa";
console.log((typeof a));
let b=Number(a);
console.log((typeof b));
console.log(b);   //NaN   not a number

let c=null;
console.log(typeof(c));   //object
console.log(Number(c));    //0


console.log("1"+2);   //12
console.log("1"+2+2);  //122
console.log(1+"2");  //12
console.log(1+"2"+"2");   //122
console.log(1+2+"2");  //32

console.log(+true);  //1
console.log(+"");  //0

