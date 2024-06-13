const name="Prince"
const age=19

//console.log(name+age+" hello");   //Prince19 hello
console.log(`My name is ${name} and my age is ${age}`);

const address=new String("Agra")
console.log(address[0]);

console.log(__proto__);

console.log(address.length);
console.log(address.toUpperCase());
console.log(address.charAt(1));
console.log(address.indexOf("g"));

//substring
console.log(address.substring(0,2));  //Ag
console.log(address.slice(-3,2));  //g

const country="    INDIA    "
console.log(country);
console.log(country.trim());

const email="princejain1608@yahoo.com"
console.log(email.replace('yahoo','gmail'))

console.log(email.includes("prince"));  //true

console.log(name.split(''));   //converts string into array