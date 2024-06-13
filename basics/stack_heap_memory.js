//primitive datatypes stored in stack like string,boolean,bigint,symbol etc

let name="Prince"
let another=name;
name="Jain";
console.log(name);  //jain
console.log(another);  //prince

//non-primitive datatypes stored in heap  like array,functions etc
let user1={
    email:"prince1608@gmail.com",
    phone:"567"
}
let user2=user1;
user2.email="pj@gmail.com"
console.log(user1.email);  //pj@gmail.com
console.log(user2.email);   //pj@gmail.com