//object made with constructor will always an singleton

const sym=Symbol("Jain")
const ob={
    name:"Prince",
    age:19,
    location:"Agra",
    [sym]:"Jain"   //Symbol
}
console.log(ob.name);  //Prince
console.log(ob["name"]);  //Prince
console.log(ob[sym]);

ob.location="Jaipur"
console.log(ob);
//Object.freeze(ob)  //freezes the values
ob.location="Agra"
console.log(ob);

ob.func=function(){
    console.log(`Prince Jain,${this.location}`);  //Prince Jain,Agra
}
console.log(ob.func());

const o1=new Object()  //{}  //singleton object
console.log((o1));
const o2={}        //non-singleton object
console.log(o2);  //{}

o1.name="Prince Jain"
o1.age=19
o1.location="Agra"
console.log(o1);
const user={
    name:{
        fullname:{
            firstname:"Prince",
            lastname:"Jain"
        }
    }
}
console.log(user.name.fullname.firstname);  //Prince

const object1={1:'a',2:'b'}
const object2={3:'c',4:'d'}
const object3=Object.assign({},object1,object2)
console.log(object3);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const object4={...object1,...object2} //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(object4);

console.log(Object.keys(object3));  //[ '1', '2', '3', '4' ]
console.log(Object.values(object3));  //[ 'a', 'b', 'c', 'd' ]
console.log(Object.entries(object3));  //[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

console.log(object3.hasOwnProperty("2"));  //true

const js={
    learner:"prince",
    price:0,
    teacher:"youtube"
}
const {learner:l}=js   //object de-structure
console.log(l);  //prince