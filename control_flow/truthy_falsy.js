let username="prince"
if(username){
    console.log("present");
}
else{
    console.log("absent");
}
//falsy values
// false,0,-0,"",null,undefined,BigInt 0N,NaN
//rest all are truthy values

let arr=[]
if(arr.length===0){
    console.log("array is empty");
}

const ob={}
if(Object.keys(ob).length===0){
    console.log("object is empty");
}