                                                         //!! JSON
//+ Il JSON, abbreviativo per "JavaScript Object Notation", è un formato di dati basato su testo utilizzato per rappresentare oggetti strutturati. 
//+ È ampiamente utilizzato per lo scambio di dati tra un client e un server, per strutturare dati in un database e per gestire le impostazioni di un app browser o sito web.


                                                  //!! SYNTAX
//* Il JSON è costituito da coppie chiave-valore, in cui le chiavi sono stringhe (ACCETTA SOLO APICI DOPPI) e i valori possono essere di diversi tipi di dati. 
//* Può essere rappresentato come un oggetto JavaScript o come una stringa JSON.

//! Oggetto JSON:  { "key" : "value" , "key2": 2, "key" : true , "key4" : ()}

//+ {
//+   "nome": "Alice",
//+   "età": 25,
//+   "città": "New York"
//+ }


//! Stringa JSON:

//? '{
//?   "nome": "Alice",
//?   "età": 25,
//?   "città": "New York"
//? }'


//! Il JSON supporta diversi tipi di dati: Stringhe, Numeri, Booleani, Null, Array, Oggetti.

//? {
//?   "nome": "Alice",
//?   "età": 25,
//?   "studente": true,
//?   "punteggi": [98, 85, 92],
//?   "indirizzo": {
//?     "via": "Via Principale",
//?     "città": "New York"
//?   },
//?   "autorizzazioni": null
//? }

//! Tuttavia possiamo anche partire con un array in cui andremo ad inserire i nostri "oggetti" JSON

//? '[ 
//? {
//?   "nome": "Alice",
//?   "età": 25,
//?   "studente": true,
//?   "punteggi": [98, 85, 92],
//?   "indirizzo": {
//?     "via": "Via Principale",
//?     "città": "New York"
//?   },
//?   "autorizzazioni": null
//? },
//? {
//?   "nome": "Alice",
//?   "età": 25,
//?   "studente": true,
//?   "punteggi": [98, 85, 92],
//?   "indirizzo": {
//?     "via": "Via Principale",
//?     "città": "New York"
//?   },
//?   "autorizzazioni": null
//? },
//? {
//?   "nome": "Alice",
//?   "età": 25,
//?   "studente": true,
//?   "punteggi": [98, 85, 92],
//?   "indirizzo": {
//?     "via": "Via Principale",
//?     "città": "New York"
//?   },
//?   "autorizzazioni": null
//? }
//? ]'


                                                    //!!OTTENERE UN JSON (SCAMBIO DATI)
//+ Richiesta:

let requestURL = './json.json'      //* Request URL, collego il lfile ad una variabile
let request = new XMLHttpRequest(); //* un oggetto integrato in js che ci permette di eseguire richieste http
 request.open('GET', requestURL);   //* inizializziamo la richiesta settando i paramentri uesto metodo specifica i parametri principali della richiesta: .open(method, URL, [async, user, password])
                                    //* method – metodo HTTP. Solitamente "GET" o "POST".
                                    //* URL – l’URL della richiesta, una stringa che può anche essere un oggetto URL.
                                    //* async – se impostato esplicitamente a false, la richiesta sarà sincrona.
                                    //* user, password – login e password per l’autenticazione HTTP di base (se richiesto).
 request.responseType = 'json';     //* settiamo il tipo di risposta "" (default) – ottenerlo come stringa,
                                    //*  "text" – ottenerlo come stringa,
                                    //*  "arraybuffer" – ottenerlo come ArrayBuffer (per dati di tipo binario, guardare il capitolo ArrayBuffer, array binari),
                                    //*  "blob" – ottenerlo come un Blob (per dati binari, guardare Blob),
                                    //*  "document" – ottenerlo come un documento XML (può usare XPath e altri metodi XML) o un documento HTML (basato sul MIME type del dato ricevuto),
                                    //*  "json" – ottiene un JSON (effettua il parsing automaticamente).
 request.send();                    //*   mandiamo la richiesta con il metodo .send()

 request.onload = function () {     //* evento in cui otteniamo la risposta della richiesta http ----> svolge la funzione

    const classe =  request.response;
    console.log(classe);
 }

//+ Utilizzo per rappresentare configurazioni e impostazioni di un'applicazione:

//? {
//?   "linguaPredefinita": "it",
//?   "tema": "scuro",
//?   "notifiche": {
//?     "abilitate": true,
//?     "suoni": false
//?   }
//? }


// Uyilizzo per archiviare dati strutturati in file o database (data.json):


// [
//   {
//     "id": 1,
//     "nome": "Prodotto 1",
//     "prezzo": 9.99
//   },
//   {
//     "id": 2,
//     "nome": "Prodotto 2",
//     "prezzo": 14.99
//   }
// ]


// Per manipolare il JSON, è possibile utilizzare i metodi JSON.parse() |per analizzare una stringa JSON in un oggetto| e JSON.stringify() |per convertire un oggetto in una stringa JSON.|

// const jsonString = '{"nome": "Alice", "eta": 25}';
// const obj = JSON.parse(jsonString);
// console.log(obj.nome); // Output: "Alice"
// console.log(obj.eta); // Output: 25

// const person = { nome: "Alice", eta: 25 };
// const jsonString = JSON.stringify(person);
// console.log(jsonString); // Output: '{"nome":"Alice","eta":25}'
