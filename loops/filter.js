const arr=[1,2,3,4,5,6,7,8,9,10]
const newarr=arr.filter( (i) => i>4 )
console.log(newarr);  //[ 5, 6, 7, 8, 9, 10 ]


const a1=arr.filter( (i) => {
    return i>4
} )
console.log(a1);  //[ 5, 6, 7, 8, 9, 10 ]



//forEach

const nums=[]
arr.forEach( (i) => {
    if(i>4){
        nums.push(i)
    }
} )
console.log(nums);  //[ 5, 6, 7, 8, 9, 10 ]


const data=[
    {
        name:"prince",
        age:19
    },
    {
        name:"khushi",
        age:20
    },
    {
        name:"ujjwal",
        age:19
    },
    {
        name:"rahul",
        age:20
    },
]
const myData=data.filter( (d) => d.age===19 )
console.log(myData);