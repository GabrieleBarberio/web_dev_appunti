//let arr = [10, 2, 3, 5 , 4, 65, 76, 45, 64, 4564, 63, 6322327, 27, 6542];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

/*dato il precedente array di numeri dobbiamo completare la funzione in modo tale da trovare il numero più basso e ritornare la stringa 
" il numero più basso è x", dove x è appunto il valore più basso, ma solo se è positivo. Nel caso in cui il valore minimo fosse negativo dovrà ritornare 
la seguente stringa "il valore è negativo quindi risulta inutilizzabile", utilizza i commenti in pseudocodice per definire e spiegare i passaggi */

//per trovare il valore minimo dichiaro prima dichiarare una variabile minimumValue che utilizzerò come elemento di comparazione quindi con il valore dell'indice zero del mio array,
//per effettuare la comparazione andrò ad utilizzare un ciclo for nel cui blocco inserirò un if statement  che farà la comparazione vera è propria e mi sovrascriverà il valore della variabile
//minimunValue con il valore minore di volta in volta. seguentemente ad aver assegnato alla variabile il valore minimo andrò ad utilizzare un if else statement con la condizione in cui se minumumValue è
// maggiore di zero eseguirà il return della sprima stringa altrimenti mi eseguirà il return della seconda stringa

// let minimumValue = arr[0];

// function findMinimum(array){
//     for( i = 0; i < arr.length ; i++ ){
//         if( arr[i] < minimumValue ){
//             minimumValue = arr[i];
//         }
//     }
//     if( minimumValue > 0){
//         return `il numero più basso è ${minimumValue}`
//     }else{
//         return `il valore è negativo quindi risulta inutilizzabile`
//     }
// }

// console.log(findMinimum(arr));

// function evenNumb(array){
//     let newArr = [];
//     for( let i=0 ; i < arr.length ; i++ ){
//         if(arr[i] % 2 == 0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }
// console.log(evenNumb(arr));

// function printThatFuckingOddNumbers(array){
// let oddNumbers ="";
// for( let i = 0 ; i < arr.length ; i++){
//     if(arr[i] % 2 == 1){
//         oddNumbers += arr[i] + " poi " ;
//         }
//     }

//         return oddNumbers.split(" poi ")

// }
// console.log(printThatFuckingOddNumbers(arr));

// let fol = "";

// function includingNumbers() {
//   for (let i = 0; i < 100; i++) {
//     if (i >= 50 && i <= 70) {
//       fol += i + " ";
//     }
//   }
//   return fol;
// }
// console.log(fol);
// // includingNumbers(arr);
// console.log(fol);

// let j=0;

//     do {
//         console.log(arr[j]);
//         j++;

//     } while (j < arr.length);

// //scrivere una funzione che verifichi se una parola è palindroma.
let word = "I topi non avevano nipoti";
let pippo = "Nono so se sono palidrono"

let invertedWord = word.split("").reverse().join("");
// console.log(word);
// console.log(invertedWord);
function isPalindrome(word1, word2) {
  word1 = word1.replace(/ /g, ""); // /x/g significa fai la ricerca di x globalmente(in tutta la stringa) e sostituiscila con
  word2 = word2.replace(/ /g, "");
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  if (word1 === word2) {
    return `Complimenti ${word} è palindroma, hai vinto!`;
  } else {
    return `Ci dispiace ${word} non è palindroma, ritenta!`;
  }
}
let result = isPalindrome(word, invertedWord);
console.log(result);

//scrivere una funzione che, data una stringa, restituisca una nuova stringa uguale alla prima senza spazi.

let str = "Ciao Mamacita, me gusta el tacatà";

function noSpaceString(word){
    word = word.replace(/ /g, "");
    return word;
}

let newStr = noSpaceString(str);
// scrivere una funznione che, data una stringa, restituisca tutte le prime lettere delle parole in maiuscolo

function capitalizeString(str){
    let newstr2 = str.replace(/\b\w/g, function(param){ return param.toUpperCase(); })
return newstr2;
}
console.log(capitalizeString(str));


function capitalizeFirstChar(string) {
  let stringToArr = string.split(" ");
  let capitalizedWordArr = [];
  for (let i = 0; i < stringToArr.length; i++) {
    let capitalizedWords =
      stringToArr[i][0].toLocaleUpperCase() + stringToArr[i].slice(1);
    capitalizedWordArr.push(capitalizedWords);
  }
  return capitalizedWordArr.join(" ");
}
let newString = capitalizeFirstChar(str);
console.log(str);
console.log(newString);
