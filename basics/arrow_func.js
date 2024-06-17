const data={
    name:"Prince",
    wlcmMssg:function(){
        console.log(`Welcome, ${this.name}`);
        console.log(this);
    }
}
data.wlcmMssg()
data.name="Narendra Modi"
data.wlcmMssg()
console.log(this);   //{}


function hello(){
    const naam="prince"
    console.log(this.naam);  //undefined          will work with objects only
    //console.log(this);
}
hello()

const fun=function(){   //another way to declare function
    const name="prince"
    console.log(this.name);  //undefined
}
fun()

//arrow function
const fun2=() =>{
    const name="prince"
    console.log(this.name);
}
fun2()

const plus=(a,b) => {
    return a+b
}
console.log(plus(3,4));

//OR
const add=(a,b) => a+b   //in single line
console.log(add(2,3));