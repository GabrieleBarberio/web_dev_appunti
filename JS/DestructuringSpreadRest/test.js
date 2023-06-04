let arr = [ 1, 2, 3, 4, ];

// let sum = arr[1] + arr[2];
// let sum2 = arr[0] + arr[1];
//_____________________

let [ i, y, k, l] = arr;

// console.log(k);

//_______________

let obj = {
    key1: 1,
    key2: 2
}
for (let entry of Object.entries(obj)){
    let [key, val] = entry;
    obj[key] = val**2;
    console.log(key);
    console.log(val);
}
// console.log(obj);

if("key" in obj && "key2" in obj){

    let {key1, key2} = obj;
    console.log(key1);
    console.log(key2);
}

function sum(obj){
    let {key1, key2} = obj;
    return key1 + key2;
}

// function sum( { key1, key2 } ){
//     return key1 + key2;
// }
let res = sum(obj);
console.log(res);
