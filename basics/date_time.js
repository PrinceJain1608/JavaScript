let mydate=new Date()
console.log(mydate);  //2024-06-14T05:46:20.208Z
console.log(mydate.toDateString());  //Fri Jun 14 2024
console.log(mydate.toLocaleDateString());  //6/14/2024


let dat=new Date(2024,6,14,5,3,2)
console.log(dat.toDateString());
console.log(dat.toLocaleDateString());

let mydat=new Date("06-14-2024")
console.log(mydat.toLocaleDateString());

let timestamp=Date.now()
console.log(timestamp);   //1718344699123   time in ms

console.log(mydate.getDate());
console.log(mydate.getDay());