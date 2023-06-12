                                                // Destructuring
// Il Destructuring è una caratteristica introdotta in JavaScript ES6 che consente di estrarre valori da array e oggetti in modo conciso e conveniente. 
//Invece di accedere ai singoli elementi uno per uno, il Destructuring consente di assegnare i valori a variabili in una sola istruzione.



// SYNTAX
// kw    [  variabili.., ..,  ... ,              ] = assegnazione;
// const [variabile1, variabile2, ..., variabileN] = array;


// Nella sintassi sopra, variabile1, variabile2, ..., variabileN rappresentano le variabili in cui verranno assegnati i valori dell'array. 
// L'array da cui estrarre i valori è indicato dalla variabile array.

                                                // Destructuring negli Array
// Nel Destructuring degli array, i valori vengono estratti in base alla posizione, ovvero il primo valore dell'array viene assegnato alla prima variabile, il secondo valore alla seconda variabile e così via.

const numbers1 = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = numbers;

    console.log(a); // Output: 1
    console.log(b); // Output: 2
    console.log(c); // Output: 3
    console.log(d); // Output: 4
    console.log(e); // Output: 5

// Nell'esempio sopra, i valori dell'array numbers vengono assegnati alle variabili a, b, c, d ed e rispettivamente.

// Destructuring con omissione di valori
// È possibile omettere alcuni valori nell'array durante il Destructuring utilizzando un underscore come segnaposto. 
// Ciò significa che è possibile estrarre solo i valori desiderati e ignorare gli altri.

const numbers2 = [1, 2, 3, 4, 5];

// Destructuring con omissione di valori
// index 0  1  2  3  4
//      [1, 2, 3, 4, 5]
//const [a, _, c, _, e] = numbers;

console.log(a); // Output: 1
console.log(c); // Output: 3
console.log(e); // Output: 5
// Nell'esempio sopra, i valori dell'array numbers vengono assegnati alle variabili a, c ed e, mentre i valori 2 ([1])  e 4 ([3]) vengono ignorati.

                                                            // Destructuring negli Oggetti
// Il Destructuring può anche essere applicato agli oggetti. 
// In questo caso, i valori vengono estratti in base al nome della chiave anziché alla posizione.
// Questo significa che il nome della variabile deve corrispondere al nome della chiave.


const person = {
  name: 'Mario',
  age: 30,
  city: 'Roma'
};


// const { name, age, city } = person;

console.log(name); // Output: 'Mario'
console.log(age); // Output: 30
console.log(city); // Output: 'Roma'



// Nell'esempio sopra, i valori delle proprietà dell'oggetto `person` vengono assegnati alle variabili corrispondenti `name`, `age` e `city`.

                                                                    //Destructuring con assegnazione di alias

// Durante il Destructuring degli oggetti, è possibile assegnare le proprietà a variabili con nomi diversi utilizzando la sintassi `nomeProprietà: nomeVariabile`.


//esempio di oggetto
const person1 = {
  name: 'Mario',
  age: 30,
  city: 'Roma'
};

// Destructuring con assegnazione di alias
const { name: fullName, age: years, city: residence } = person;

console.log(fullName); // Output: 'Mario'
console.log(years); // Output: 30
console.log(residence); // Output: 'Roma'
// Nell'esempio sopra, i valori delle proprietà dell'oggetto person vengono assegnati alle variabili con nomi diversi fullName, years e residence.


// Il Destructuring può essere utilizzato anche con altre caratteristiche, come le funzioni e gli argomenti predefiniti. 
// Inoltre, è possibile combinare il Destructuring con il rest operator (...) per estrarre parte di un array o oggetto rimanente.

                                                                        
                                                                        // Destructuring in funzioni

// Destructuring negli argomenti di una funzione
function greet({ name, age }) {
  console.log(`Ciao, mi chiamo ${name} e ho ${age} anni.`);
}

const person2 = {
  name: 'Mario',
  age: 30
};

greet(person);
// Output: "Ciao, mi chiamo Mario e ho 30 anni."
                                                                        // Destructuring con il rest operator

// Destructuring con il rest operator in un array
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Destructuring con il rest operator in un oggetto
const person3 = {
  name: 'Mario',
  age: 30,
  city: 'Roma',
  country: 'Italia'
};

const { name, age, ...address } = person;

console.log(name); // Output: 'Mario'
console.log(age); // Output: 30
console.log(address); // Output: { city: 'Roma', country: 'Italia' }
