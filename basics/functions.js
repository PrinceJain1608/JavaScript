function add(a,b){
    console.log(a+b);
}
add(3,5)  //

function user(username="Sam Manikshaw"){   //default value
    if(!username){           // or username==undefined
        console.log("Please enter a valid username");
        return
    }
    return(`${username} is loggedIn `)  //Prince is loggedIn
}
let result=user("Prince")
console.log(result);
let ans=user()  //undefined is loggedIn 
console.log(ans);

const fun1=function(...num){   //rest operator
    return num
}
console.log(fun1(100,200,300));   //[ 100, 200, 300 ]

const intro={
    name:"prince",
    age:19
}
function fun2(anyObject){      //function with object
    console.log(`My name is ${anyObject.name} and age is ${anyObject.age}`);
}
//fun2(intro)
fun2({
    name:"Prince",   //My name is Prince and age is 19
    age:19
})

//function with array
const arr=[3,2,55,88,"Prince"]
function second(getArray){
    return getArray[1]  //2
}
console.log(second(arr))