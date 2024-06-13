let age=19;
console.log(age);

const pin=new Number(282001)
console.log(pin);   //[Number: 282001]

console.log(pin.toString().length);

const number=99.1244
console.log(number.toPrecision(2));  //99

const hundred=100000000000
console.log(hundred.toLocaleString('en-IN'));  //in INDIAN standard   1,00,00,00,00,000

console.log(Math);
console.log(Math.abs(-567));
console.log(Math.round(2.3));

console.log(Math.random());   //between 0 and 1

const max=20
const min=10
console.log(Math.floor(Math.random()*(max-min+1)));