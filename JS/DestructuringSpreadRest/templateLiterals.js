                                                                                            //!! Template Literals


//* I template literals sono una caratteristica introdotta in ECMAScript 2015 (ES6) che permette di creare stringhe dinamiche e flessibili.
//* Consentono di inserire espressioni JavaScript all'interno di stringhe delimitate da backtick (` `), 
//* ci permette non solo di concatenare stringe ma anche di effettuare operazioni più complessedi come inserire espressioni e l'esecuzione di operazioni all'interno delle stringhe.

//!Syntax
//+ Sono delimitati da backtick (` `) anziché da apici singoli o doppi come le stringhe tradizionali.
//+ Inserire le espressioni/variabili all'interno delle parentesi graffe ${}.


//! Interpolazione delle variabili:

const name = "Alice";
const age = 25;
const greeting = `Ciao, mi chiamo ${name} e ho ${age} anni.`;
console.log(greeting); //? Output: Ciao, mi chiamo Alice e ho 25 anni.

//! Esecuzione di operazioni:
const a = 5;
const b = 3;
const sum = `La somma di ${a} e ${b} è ${a + b}.`;
console.log(sum); //? Output: La somma di 5 e 3 è 8.

//! Multilinea:
const multiline = `
Questa è una stringa
su più righe.
`;
console.log(multiline);
//? Output:
//? Questa è una stringa
//? su più righe.

//! Scrivere template HTML:
const title = "Titolo";
const content = "Contenuto";
const html = `
  <div>
    <h1>${title}</h1>
    <p>${content}</p>
  </div>
`;
console.log(html);

//! Chiamare funzioni:
function getName() {
  return "John Doe";
}
const message = `Benvenuto, ${getName()}!`;
console.log(message); //? Output: Benvenuto, John Doe!

//! Concatenazione di stringhe:
const str1 = "Hello";
const str2 = "World";
const resultStr = `${str1} ${str2}!`;
console.log(resultStr); //? Output: Hello World!

//! Controlli sui numeri:
const price = 19.99;
const formattedPrice = `Il prezzo è: $${price.toFixed(2)}`;
console.log(formattedPrice); //? Output: Il prezzo è: $19.99

//! Accedere alle proprietà degli oggetti:
const person = {
  name: "Alice",
  age: 25,
};
const description = `Mi chiamo ${person.name} e ho ${person.age} anni.`;
console.log(description); //? Output: Mi chiamo Alice e ho 25 anni.

//! Utilizzo del ternary operator:
const isAdmin = true;
const userRole = `Ruolo: ${isAdmin ? "Admin" : "Utente"}`;
console.log(userRole); //? Output: Ruolo: Admin
