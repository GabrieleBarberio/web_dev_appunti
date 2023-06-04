                                                          //!! Spread Operator
//* Lo spread operator è rappresentato dai tre puntini consecutivi ... ed è utilizzato per "spalmare" (o "spargere") gli elementi di un array o gli attributi di un oggetto in un NUOVO contesto.

//! Utilizzo con Array


//+ È possibile utilizzare lo spread operator per copiare un array in modo semplice e conciso.

const array1 = [1, 2, 3];
const array2 = [...array1];
console.log(array2); // Output: [1, 2, 3]

//+ Unire array: Lo spread operator consente di unire più array in uno nuovo.

const array3 = [1, 2];
const array4 = [3, 4];
const mergedArray = [...array3, ...array4];
console.log(mergedArray);                   //? Output: [1, 2, 3, 4]

//+ Passare gli elementi di un array come argomenti di una funzione: È possibile utilizzare lo spread operator per passare gli elementi di un array come argomenti separati a una funzione.

const numbers1 = [1, 2, 3];
const sum1 = (a, b, c) => a + b + c;
console.log(sum(...numbers1));               //? Output: 6

//+ Creare una copia modificata di un array: Lo spread operator consente di creare una copia di un array con uno o più elementi modificati.

const originalArray = [1, 2, 3];
const modifiedArray = [...originalArray, 4];
console.log(modifiedArray);                 //? Output: [1, 2, 3, 4]

//! Utilizzo con Oggetti

//+ Copiare un oggetto: Lo spread operator può essere utilizzato per copiare le proprietà di un oggetto in un nuovo oggetto.

const obj5 = { a: 1, b: 2 };
const obj6 = { ...obj1 };
console.log(obj6);                          //? Output: { a: 1, b: 2 }

//+ Unire oggetti: Lo spread operator consente di unire le proprietà di più oggetti in un nuovo oggetto.


const obj7 = { a: 1 };
const obj8 = { b: 2 };
const mergedObject = { ...obj7, ...obj8 };
console.log(mergedObject);                  //? Output: { a: 1, b: 2 }


//+ Aggiungere o sovrascrivere le proprietà di un oggetto: È possibile utilizzare lo spread operator per aggiungere o sovrascrivere le proprietà di un oggetto.


const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, b: 3, c: 4 };
console.log(obj2);                        //? Output: { a: 1, b: 3, c: 4 }

//+ Estrarre le proprietà di un oggetto come variabili: Lo spread operator permette di estrarre le proprietà di un oggetto come variabili separate.


const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name);                        //? Output: 'John'
console.log(age);                         //? Output: 30

//! Utilizzo con Funzioni

//+ Passare argomenti multipli a una funzione: Lo spread operator consente di passare argomenti multipli a una funzione senza la necessità di specificarli singolarmente.

const numbers2 = [1, 2, 3];
const sum2 = (a, b, c) => a + b + c;
console.log(sum2(...numbers));             //? Output: 6

                                                              //!!REST OPERATOR
//* Il rest operator si scrive con i tre puntini consecutivi dello spread ... seguito dal parametro rest;
//* è utilizzato per raccogliere un numero variabile di argomenti in una funzione o per raccogliere gli elementi rimanenti in un array.

//+ Raccogliere argomenti rimanenti: È possibile utilizzare lo spread operator come rest parameter per raccogliere tutti gli argomenti rimanenti in un array.

const sum3 = (a, b, ...rest) => {
  let result = a + b;
  for (const num of rest) {
    result += num;
  }
  return result;
};
console.log(sum3(1, 2, 3, 4));     //? Output: 10

//! Utilizzo con Funzioni

//+ Raccogliere argomenti in un array: Il rest operator può essere utilizzato per raccogliere tutti gli argomenti di una funzione in un array.

const sum4 = (...numbers) => {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
};
console.log(sum4(1, 2, 3, 4));       //? Output: 10

//+ Utilizzare argomenti specifici e raccogliere il resto: Il rest operator può essere utilizzato per raccogliere solo gli argomenti rimanenti in un array, consentendo di utilizzare argomenti specifici.

const calculateProduct = (multiplier, ...numbers) => {
  let result = multiplier;
  for (const num of numbers) {
    result *= num;
  }
  return result;
};
console.log(calculateProduct(2, 3, 4));    //? Output: 24

//! Utilizzo con Array
//+ Estrarre gli elementi rimanenti in un array: Il rest operator può essere utilizzato per estrarre gli elementi rimanenti in un array, dopo l'estrazione di elementi specifici.

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);                               //? Output: 1
console.log(second);                              //? Output: 2
console.log(rest);                                //? Output: [3, 4, 5]

//+ Concatenare array: Il rest operator può essere utilizzato per concatenare più array in uno nuovo.


const array5 = [1, 2];
const array6 = [3, 4];
const combinedArray = [...array5, ...array6];
console.log(combinedArray);         //? Output: [1, 2, 3, 4]

//+ Passare gli elementi di un array come argomenti di una funzione: È possibile utilizzare il rest operator per passare gli elementi di un array come argomenti separati a una funzione.


const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers));       //? Output: 6
