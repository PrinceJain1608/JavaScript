var a=10
let b=20
const c=30
if(true){
    let b=300
    var a=900
    console.log("inner ",a);  //900
}
console.log((a));  //900
console.log((b));  //20
console.log((c));  //30


function one(){
    const name="Prince"
    function two(){
        const age=19
        console.log(name);
    }
    two()
}
one()

if(true){
    const username="Prince "
    if(username==="Prince "){
        const address="Agra"
        console.log(username+address);
    }
}