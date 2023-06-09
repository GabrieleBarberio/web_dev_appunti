//!!Promise

//* la Promise incapsula del codice che viene eseguito in modo asincrono
//* "Producing code" è un codice che può prendersi del tempo per essere eseguito
//* "Consuming code" è un codice che deve attendere il risultato del "producing code"
//* La "Promise" è un oggetto JS che collega producing code con "consuming code"
//* Il "Promise" contiene sia il "producing code" che le chiamate al "consuming code"

// ! Syntax

let promise = new Promise((resolve, reject) => {
  //+ esecutore (il codice produttore\ producing code)

  resolve(value); //+ se il processo termina correttamente, col risultato value.
  reject(error); //+  se si verifica un errore, error è l’oggetto errore.
});

//+ La funzione passata a new Promise è chiamata esecutore (executor). Quando la promise è creata, questa funzione esecutore viene eseguita automaticamente.

//+ I suoi argomenti resolve e reject sono delle callback fornite da JavaScript stesso. Il nostro codice sta solamente dentro l’esecutore.

//? Ricapitolando: l’esecutore parte automaticamente e tenta di eseguire un compito:
//? Quando l’esecuzione termina, viene invocato resolve in caso di successo, oppure reject in caso di errore.

//+ L’oggetto promise restituito ha le seguenti proprietà interne:
//+ state — inizialmente “pending”(in attesa), poi cambia in “fulfilled”(soddisfatto) se viene invocato resolve o in “rejected”(respinto) se viene invocato reject.
//+ result — inizialmente undefined, poi cambia in value se viene invocato resolve(value) o in error se viene invocato reject(error).

//* Le proprietà state e result dell’oggetto Promise sono interne. Non possiamo accedervi direttamente dal nostro “codice consumatore”.
//* Possiamo usare i metodi .then/.catch/.finally per questo. Questi metodi sono descritti sotto.

//! then
//+ Il più importante e fondamentale è .then.

//! Syntax

promise.then(
  function (result) {
    //? gestisce un risultato in caso di successo 
  },
  function (error) {
    //? gestisce un errore */
  }
);

//+ Il primo argomento di .then è una funzione che esegue quando una promise viene risolta, e ne riceve il risultato.

//+ Il secondo argomento di .then è una funzione che esegue quando una promise viene rifiutata e riceve l’errore. 

//* Per esempio, ecco una reazione ad una promise soddisfatta:
let resolvedPromise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("fatto!"), 1000);
});

//* resolve esegue la prima funzione in in .then
resolvedPromise.then(
  (result) => console.log(result), // mostra "fatto!" dopo 1 secondo
  (error) => console.log(error) // non viene eseguito
);

//* E in caso di rifiuto (rejection) – la seconda:
let rejectedPromise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

//* reject runs the second function in .then
rejectedPromise.then(
  (result) => console.log(result), // non vene eseguita
  (error) => console.log(error) // mostra "Error: Whoops!" dopo 1 secondo
);

//+ Se siamo interessati solo ai completamenti con successo, allora possiamo fornire solo una funzione come argomento a .then:

let onlySuccPromise = new Promise((resolve) => {
  setTimeout(() => resolve("fatto di nuovo!"), 5000);
});

onlySuccPromise.then((value) => {
  console.log(value); // mostra "fatto di nuovo!" dopo 5 secondo
});

//*****************************************************************************************************/

//? per fare un esempio possiamo creare un numero casuale e in base a quel numero casuale risolviamo o rifiutiamo la nostra promessa:

let ourPromise = new Promise((resolve, reject) => {
  let rand = Math.random();
  if (rand > 0.5) {
    resolve(rand);
  } else {
    reject(rand);
  }
});

// ourPromise.then(
//   (val) => console.log(val),
//   (err) => console.log(err)
// );

ourPromise
  .then((val) => console.log("è maggiore di 0.5", val))
  .catch((err) => console.error("è inferiore a 0.5", err));

//? ciò che una promise ci permette di fare è anche concatenare alcune funzioni diverse

let ourNewPromise = new Promise((resolve, reject) => {
  let rand = Math.random();
  if (rand > 0.5) {
    resolve(rand);
  } else {
    reject(rand);
  }
});

ourNewPromise
  .then((val) => val * 10)
  .then((val) => console.log("moltiplicato x10", val))
  .catch((err) => console.error(err, "è inferiore a 0.5"));
