let arr="prince"
for (const i of arr) {
    console.log(i);
}

//Maps
const map=new Map()
map.set("Prince",567)
map.set("Khushi",510)
map.set("Ujjwal",517)
console.log(map);  //Map(3) { 'Prince' => 567, 'Khushi' => 510, 'Ujjwal' => 517 }

for (const [i,j] of map) {  
    console.log(i," ",j); 
}
//Prince   567
//Khushi   510
//Ujjwal   517