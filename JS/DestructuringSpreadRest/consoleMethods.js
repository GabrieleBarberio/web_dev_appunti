//!! CONSOLE METHODS

//* La console è un oggetto prototype che fornisce un'interfaccia per la visualizzazione dei messaggi di output e il debugging.
//* La console dispone di diversi metodi che consentono di stampare messaggi di log, errori, avvisi e altro ancora sulla console del browser
//* o nell'ambiente di sviluppo.

//! console.log():
//+ Il metodo console.log() consente di stampare messaggi di log sulla console. 
//+ È utile per la visualizzazione di informazioni generali, debug e valori delle variabili.

console.log("Questo è un messaggio di log."); //? Output: Questo è un messaggio di log.

//! console.error():
//+ Il metodo console.error() consente di stampare messaggi di errore sulla console.

console.error("Si è verificato un errore."); //? Output: Si è verificato un errore.

//! console.warn():
//+ Il metodo console.warn() consente di stampare messaggi di avviso sulla console.

console.warn("Attenzione: questa funzione è deprecata."); //? Output: Attenzione: questa funzione è deprecata.

//! console.info():
//+ Il metodo console.info() consente di stampare messaggi informativi sulla console. 

console.info("Questo è un messaggio informativo."); //? Output: Questo è un messaggio informativo.

//! console.clear():
//+ Il metodo console.clear() consente di pulire la console, rimuovendo tutti i messaggi precedenti.

console.clear();

//! console.table():
//+ Il metodo console.table() consente di visualizzare una tabella degli oggetti o degli array sulla console.

const person = { name: "Mario", age: 30 };
console.table(person);
//? Output:
//? | (index) | value |
//? |---------|-------|
//? |  name   | Mario |
//? |  age    |  30   |


//! console.group() e console.groupEnd():
//+ I metodi console.group() e console.groupEnd() consentono di raggruppare i messaggi sulla console, creando una gerarchia visuale.

console.group("Gruppo 1");
console.log("Messaggio 1");
console.log("Messaggio 2");
console.groupEnd();

//? Output:
//? Gruppo 1
//?   Messaggio 1
//?   Messaggio 2

//! console.time() e console.timeEnd():
//+ I metodi console.time() e console.timeEnd() consentono di misurare il tempo di esecuzione di un blocco di codice.

console.time("Tempo di esecuzione");
for (let i = 0; i < 1000000; i++) {
  // Esegui un'operazione
}
console.timeEnd("Tempo di esecuzione");

//? Output: Tempo di esecuzione: 32.874ms (il valore può variare)

//! console.assert():
//+ Il metodo console.assert() consente di testare una condizione e stampare un messaggio di errore solo se la condizione è falsa.

const x = 5;
console.assert(x === 10, "x non è uguale a 10"); //? Nessun output

console.assert(x === 5, "x non è uguale a 5"); //? Nessun output

//! console.trace():
//+ Il metodo console.trace() consente di stampare una traccia di stack sulla console, visualizzando la sequenza di chiamate di funzione che ha portato all'attuale punto di esecuzione.

function funzione3() {
  console.trace();
}

function funzione2() {
  funzione3();
}

function funzione1() {
  funzione2();
}

funzione1();

//? Output:
//? Trace
//?     at funzione3 (file.js:2:11)
//?     at funzione2 (file.js:6:3)
//?     at funzione1 (file.js:10:3)
//?     at file.js:14:1