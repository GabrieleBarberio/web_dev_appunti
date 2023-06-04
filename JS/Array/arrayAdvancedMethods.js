                                                //!!forEach
//* forEach è un metodo semplificato per scrivere un ciclo che come possiamo vedere grazie anche all'utilizzo di una arrow func abbiamo concentrato tre righe di codice in una

                                                //!! SYNTAX 
                                             //      array.forEach( function(element){
                                                    //questo blocco di codice verrà eseguito per ogni elemento nell'array
                                               //     console.log(element);
                                              //    });


let sentence = "";
let words = ["This", "is", "my", "fired", "mate"];

const array1 = [ 8 , 5, 12, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
//? Expected output: 3


words.forEach((el) => {
//   console.log(el);
  sentence += el + " ";
});

// console.log(sentence);
for (const el of words) {
//   console.log(el);
  sentence += el + " ";
}
// console.log(sentence);

//* possiamo anche scrivere l'operazione effettuata nel forEach di riga 7 sichiarando la funzione fuori dal metodo e richiamarla nelle partentesi*/

let func = (el) => {
//   console.log(el);
  sentence += el + " ";
};
words.forEach(func);
// console.log(sentence);

                                                      //!!indexOf

//*In JavaScript, indexOf è un metodo che viene utilizzato per cercare l'indice di un elemento all'interno di un array. 
//* Il metodo restituisce l'indice della prima occorrenza dell'elemento all'interno dell'array, oppure restituisce -1 se l'elemento non viene trovato.



//? cerca l'indice dell'elemento "3"
let array = [ 1, 5, 65, 4, 63, 53 ]
const index = array.indexOf(3); // tra parentesi c'è l'elemento di cui vogliamo indagare il 

if (index !== -1) { //?  !== -1 === se esiste in quanto se non viene trovato l'elemento indexOf restituisce -1
  console.log(`L'elemento "3" si trova all'indice ${index}.`);
} else {
  console.log("L'elemento non è stato trovato nell'array.");
}

console.log(index);


                                                                            //!!.map()
//* .map() è un metodo nativo di JavaScript che viene utilizzato per iterare su un array e trasformare ogni elemento in un nuovo array
//*con gli stessi elementi dell'array originale, ma trasformati in qualche modo specifico. */

                                //!  SYNTAX

//+ array.map(function(elementoAttuale, indice, arrayOriginale) {
//+      trasformazione dell'elemento
//+     return elementoTrasformato;
//+   });
//! ESEMPI

//Moltiplicare tutti gli elementi di un array per un certo valore:

const numbers0 = [1, 2, 3, 4, 5];
const multipliedNumbers = numbers0.map(num => num * 2);
console.log(multipliedNumbers); // Output: [2, 4, 6, 8, 10]

//Rendere tutti gli elementi di una stringa in maiuscolo:

const string = "hello world";
const uppercaseString = [...string].map(char => char.toUpperCase()).join("");
console.log(uppercaseString); // Output: "HELLO WORLD"

//Estrarre una proprietà da un array di oggetti:

const users1 = [{ name: "Alice", age: 30 }, { name: "Bob", age: 40 }];
const names1 = users1.map(user => user.name);
console.log(names1); // Output: ["Alice", "Bob"]

//Trasformare un array di numeri in un array di stringhe:


const numbers2 = [1, 2, 3];
const strings = numbers2.map(num => num.toString());
console.log(strings); // Output: ["1", "2", "3"]


//Rimuovere gli elementi duplicati da un array:

const numbers3 = [1, 2, 2, 3, 3, 3];
const uniqueNumbers = numbers3.map((num, index, arr) => arr.indexOf(num) === index && num);
console.log(uniqueNumbers); // Output: [1, 2, 3]


//Trasformare un array di stringhe in un array di oggetti:


const names4 = ["Alice", "Bob"];
const users3 = names4.map(name => ({ name }));
console.log(users3); // Output: [{ name: "Alice" }, { name: "Bob" }]


//Aggiungere un prefisso a tutte le stringhe in un array:

const names = ["Alice", "Bob"];
const prefixedNames = names.map(name => `Mr. ${name}`);
console.log(prefixedNames); // Output: ["Mr. Alice", "Mr. Bob"]



//Mappare un array in un oggetto con chiavi e valori personalizzati:


const numbers7 = [1, 2, 3];
const object = numbers7.map(num => ({ [`key${num}`]: num }));
console.log(object); // Output: [{ key1: 1 }, { key2: 2 }, { key3: 3 }]

//Trasformare un array di oggetti in un array di valori di una specifica proprietà:


const users = [{ name: "Alice", age: 30 }, { name: "Bob", age: 40 }];
const ages = users.map(user => user.age);
console.log(ages); // Output: [30, 40]

                                                          //!!REDUCE


//* La funzione di riduzione viene chiamata con due argomenti: l'accumulatore e l'elemento corrente dell'array. 
//* L'accumulatore è il valore accumulato finora dalla funzione di riduzione, mentre l'elemento corrente è il valore dell'array che sta attualmente venendo elaborato.
//* Il valore restituito dalla funzione di riduzione viene poi utilizzato come nuovo valore dell'accumulatore per la successiva chiamata della funzione di riduzione.
//* Il metodo .reduce() accetta anche un secondo argomento opzionale, che rappresenta il valore iniziale dell'accumulatore. 
//* Se questo argomento viene omesso, l'accumulatore viene inizializzato con il primo elemento dell'array.

const numbers5 = [1, 2, 3, 4, 5];
const sum = numbers5.reduce((accumulator, currentValue ) => accumulator + currentValue );
console.log(sum); // Output: 15

//+ In questo esempio, la funzione di riduzione somma l'accumulatore al valore corrente e restituisce la somma, 
//+ che diventa l'accumulatore per la successiva chiamata della funzione. 
//+ L'argomento opzionale 0 viene utilizzato come valore iniziale dell'accumulatore (potevea essere l'indice in un ciclo).


                                                        //!!SORT


//* Il metodo sort() può essere chiamato senza argomenti, 
//* in questo caso ordina gli elementi dell'array in ordine alfabetico/ crescente. 
//* Se invece si vuole ordinare l'array in base a un criterio specifico, 
//* si può passare come argomento una funzione che definisca il criterio di ordinamento. 
//* Questa funzione prende come argomenti due elementi dell'array e 
//* restituisce un valore negativo se a deve essere posizionato prima di b, 
//* un valore positivo se a deve essere posizionato dopo di b, e zero se a e b sono equivalenti ai fini dell'ordinamento.
//!Modifica l'array originale

numbers.sort(); // Ordina l'array in ordine alfabetico
console.log(numbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

numbers.sort((a, b) => a - b); // Ordina l'array in ordine crescente
console.log(numbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

numbers.sort((a, b) => b - a); // Ordina l'array in ordine decrescente
console.log(numbers); // Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]


                                                //!! FILTER

//* .filter() è un metodo dell'oggetto Array che consente di creare un nuovo array contenente 
//* solo gli elementi di un array originale che 
//* soddisfano una determinata condizione.
//!CREA UN NUOVO ARRAY

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//+ In questo esempio, la funzione di callback passata come argomento a filter() verifica se un numero è pari. 
//+ filter() quindi restituisce un nuovo array contenente solo i numeri pari.
//+ La funzione di callback passata a filter() prende come argomento l'elemento corrente dell'array e deve restituire 
//+ un valore booleano che indica se l'elemento deve essere incluso nell'array filtrato. Se la funzione di callback restituisce true,
//+ l'elemento viene incluso nell'array filtrato, altrimenti viene escluso.
//+ filter() non modifica l'array originale, ma restituisce un nuovo array contenente solo gli elementi che soddisfano la 
//+ condizione definita nella funzione di callback. Questo rende filter() particolarmente utile quando si vuole lavorare con un 
//+ sottoinsieme degli elementi di un array originale senza modificarlo.