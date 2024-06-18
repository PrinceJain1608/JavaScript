const arr=[510,567,517]
arr.forEach( (i) => {
    console.log(i);
} )

arr.forEach( (i,index,arr) => {
    console.log(i,index,arr);
} )


function print(i){
    console.log(i);
}
arr.forEach(print)



//OBJECT ITERATION

const array=[
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
        age:18
    },
    {
        name:"prashu",
        age:22
    }
]
array.forEach( (i) => {
    console.log(i.name);
} )
//prince
//khushi
//ujjwal
//prashu