
// let espressione = function(a , b) { return (a)**2 + (b)**2 }
// let teorema = espressione(2,4)
// console.log(teorema);

// let sommaBoh = (triangolo, daSommare) => { return triangolo + daSommare}

// console.log(sommaBoh( espressione(2,4), teorema ));

function reordArray(array){
    let rearranged = array.slice().sort();        //funzione normale
    return rearranged;
}

// let reordArray = (array) => {let rearranged = array.slice().sort(); return rearranged }  //con arrow function
let rearranged = reordArray(words);
console.log(rearranged)





let words = ["gatto", "bicicletta", "albero", "caffè", "libro", "sole", "giornale", "casa", "computer", "montagna"];


words.forEach(element => {
    console.log(element)
    
});

let numbers = [2,5,4,3,2,5,76,34,23,1,54,76,41,69,12,34,455,76,12,34,45];
function sumNumbers(arr){
    let sum= 0;
    for(let i=0; i < arr.length ; i++ ){
        sum += arr[i];
    }
return sum;
}


function somma(arr) {
    let sum = 0;
    arr.forEach(element => {
      sum += element;
    })
    return sum;
}
let somma1 = somma(numbers);
console.log(somma1);








