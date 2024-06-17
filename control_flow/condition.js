let loggedIn=true
if(loggedIn){
    console.log("user is logged in");
}
else{
    console.log("user is logged out");
}

//Nullish Coalescing Operator (??)
let val;
//val=null??20  //20
val=10??20   //10
console.log(val);


//Ternary Operator
let price=2000
price>=1500 ? console.log("greater than 1500") : console.log("less than 1500");