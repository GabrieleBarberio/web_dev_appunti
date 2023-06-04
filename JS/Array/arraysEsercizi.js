let numbers = [2,5,4,3,2,5,76,34,23,1,54,76,41,69,12,34,455,76,12,34,45];
let numb = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

//__________________________________________________________________________________________________//
// Scrivi una funzione che accetta un array di numeri e restituisce la somma di tutti gli elementi.//
//________________________________________________________________________________________________//

function sumNumbers(arr){
    let sum= 0;
    for(let i=0; i < arr.length ; i++ ){
        sum += arr[i];
    }
return sum;
}

//_______________________________________________________________________________________________________________//
//Scrivi una funzione che accetta un array di numeri e restituisce un nuovo array contenente solo i numeri pari.//
//_____________________________________________________________________________________________________________//


function savesEvenNumbers(array) {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if( array[i] % 2 === 0 ){
            evenNumbers.push(array[i]) 
        }
    }
    return evenNumbers;
}

//________________________________________________________________________________________//
// Scrivi una funzione che accetta un array di numeri e restituisce il numero più grande.//
//______________________________________________________________________________________//

function findMax(array){
    let max = array[0];
    for( let i = 0 ; i < array.length ; i++ ){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}
let max = findMax(numbers);

//____________________________________________________________________________________//
//Scrivi una funzione che accetti un array in entrata e restituisca il valore minimio//
//__________________________________________________________________________________//

function findMin(array) {
    let min = array[0]; 
    for (let i = 0; i < array.length ; i++) { //str.length
    
      if (array[i] < min) {
        min = array[i];
      }
    }
    
    if (min > 0) {
      return `il numero ${min} è positivo!`;
    } else {
      return `Il numero ${min} è negativo!`;
    }
  }


//________________________________________________________________________________________________________________________________//
//Scrivi una funzione che accetti un array e che restituisce un nuovo array contenente i numeri compresi in un intervallo preciso//
//______________________________________________________________________________________________________________________________//

function betweenNumbers(array) {
    let bet = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= 10 && array[i] <= 100) {
        bet.push(array[i]);
      }
    }
   return bet;
  }

//__________________________________________________________________________________________________________________________________________//
//Scrivi una funzione che accetta due array di numeri e restituisce un nuovo array contenente solo i numeri presenti in entrambi gli array.//
//________________________________________________________________________________________________________________________________________//

function savesIncludedNumbers(array1, array2){
    let includedNumbers = [];
    for(let i = 0; i < array1.length; i++){
        if( array1.includes(array2[i])){ 
            includedNumbers.push(array2[i])
        }
    }
    return includedNumbers;
}
let includedNumbers = savesIncludedNumbers(numbers,numb);

//______________________________________________________________________________________//
//Scrivi una funzione che accetta un array di numeri e restituisce la media dei numeri.//
//____________________________________________________________________________________//

function arrayAverage(array){
    let sum = 0;
for(let i = 0; i < array.length; i++ ){
    sum += array[i];
}
    return  sum / array.length;
}
let average = arrayAverage(numbers)


//__________________________________________________________________________________________________________________________________________________//
//Scrivi una funzione che accetta un array di parole e restituisce un nuovo array contenente solo le parole che iniziano con una lettera specifica.//
//________________________________________________________________________________________________________________________________________________//

let words = ["gatto", "bicicletta", "albero", "caffè", "libro", "sole", "giornale", "casa", "computer", "montagna"];
function findFirstChar(arr,letter){
    let firstCharArray = [];
    for( let i=0; i < arr.length; i++){
        if(arr[i].startsWith(letter)){
            firstCharArray.push(arr[i]);
        }else{
            return "Character dont found! "
        }
    }
    return firstCharArray;
}

let startWhitC = findFirstChar(words, "o");
console.log(startWhitC)
//_______________________________________________________________________________________________________________________________//
//Scrivi una funzione che accetta un array di stringhe e restituisce un nuovo array contenente le stringhe in ordine alfabetico.//
//_____________________________________________________________________________________________________________________________//

// function reordArray(array){
//     let rearranged = array.slice().sort();        //funzione normale
//     return rearranged;
// }


function reordArray(array){
    let reordered = [];
    reordered.push(array.sort() )
    return reordered;
}


//  let reordArray = (array) => {let rearranged = array.slice().sort(); return rearranged }  //con arrow function
let rearranged = reordArray(words);
console.log(rearranged[0][1])

