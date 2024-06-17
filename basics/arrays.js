const arr=[4,2,"prince",true,"jain"]

const arr2=new Array(4,2,"prince",true,"jain")

console.log(arr[2]);

arr.push("chotu")
arr.push("thala")   //add element at last
console.log(arr);
arr.pop()   //deletes last element
console.log(arr);
arr.unshift(99)  //99 added in starting
console.log(arr);
arr.shift()
console.log(arr);  //removes 9
console.log(arr.includes("prince"));
console.log(arr.indexOf("jain"));

const newarr=arr.join()
console.log(arr);
console.log(newarr);  //4,2,prince,true,jain,chotu  and type is string

const a1=arr.slice(1,3)
console.log(arr);   //[ 4, 2, 'prince', true, 'jain', 'chotu' ]
console.log(a1);  //  //[ 2, 'prince' ]

const a2=arr.splice(1,3)
console.log(arr);   //[ 4, 'jain', 'chotu' ]
console.log(a2);  //[ 2, 'prince', true ]


myarr1=["prince","22bcon567",16,8,2004,"jain"]
myarr2=["hello","how","are","you"]
//myarr1.push(myarr2)  //array in array
//console.log(myarr1);
//console.log(myarr1[6][2]);  //are

const ar=myarr1.concat(myarr2)  //merges two arrays in 3rd array
console.log(ar);

const newaArr=[...myarr1,...myarr2]  //merges two or more arrays  spread method
console.log(newaArr);

const array1=[1,2,3,[2,3,4],2,[1,2,4,[3,5,7]]]
const array2=array1.flat(Infinity)
console.log(array2);   //[
    1, 2, 3, 2, 3, 4,
    2, 1, 2, 4, 3, 5,
    7
  //]

  console.log(Array.isArray("prince"));  //false
  console.log(Array.from("prince")); //[ 'p', 'r', 'i', 'n', 'c', 'e' ]

  let a=510
  let b=567
  let c=517
  console.log(Array.of(a,b,c));  //[ 510, 567, 517 ]
