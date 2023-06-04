                                                            //!!Oggetti in JavaScript

//* Gli oggetti sono delle strutture di dati. Un oggetto rappresenta un INSIEME di coppie: chiave: valore, 
//* in cui ogni valore è accessibile tramite una chiave univoca. Gli oggetti consentono di organizzare e gestire dati complessi in modo flessibile.

//! Creazione di Oggetti
//? In JavaScript, gli oggetti possono essere creati utilizzando la sintassi letterale degli oggetti, il costruttore Object o le Classi.

//! Creazione di un Oggetto con la sintassi letterale

//+ kw   nomeObj ={
//+     key : "value",
//+     key2 : "value",
//+ }


const person = {
  name: "Mario",
  age: 30,
  city: "Roma"
};

//+ Creato un oggetto person con tre proprietà: name, age e city. Ogni proprietà ha una chiave (ad esempio, "name") e un valore associato (ad esempio, "Mario").

const person1 = new Object();
person.name = "Mario";
person.age = 30;
person.city = "Roma";

//? Nell'esempio sopra, viene creato un oggetto person utilizzando il costruttore Object e le proprietà vengono aggiunte successivamente assegnando i valori alle chiavi.

//+ Per accedere ai valori degli oggetti in JavaScript, è possibile utilizzare la sintassi dotNotation o la sintassi delle parentesi quadrate [].

        //! DOTNOTATION
console.log(person.name); // Output: "Mario"
console.log(person.age); // Output: 30



        //! BRAKETSNOTATION
console.log(person["name"]); // Output: "Mario"
console.log(person["age"]); // Output: 30
//! Questa sintassi è utile quando la chiave contiene caratteri speciali o quando la chiave è una variabile.

//+ Metodi
//* Gli oggetti in JavaScript possono anche contenere funzioni, che vengono chiamate metodi degli oggetti. 
//* I metodi consentono di eseguire azioni specifiche sull'oggetto stesso o di ottenere informazioni relative all'oggetto.

const person = {
  name: "Mario",
  age: 30,
  greet: function() {
    console.log(`Ciao, mi chiamo ${this.name} e ho ${this.age} anni.`);
  }
};
//+ Definiamo il metodo greet che stampa un messaggio di saluto utilizzando le proprietà name e age dell'oggetto person. 
//+ La parola chiave this fa riferimento all'oggetto corrente (person).
//+ Per chiamare il metodo possiamo usare la dot notation ricordandoci di invocare la funzione.

person.greet(); // Output: "Ciao, mi chiamo Mario e ho 30 anni."

//! Iterazione sugli Oggetti

//+ Per iterare sulle proprietà di un oggetto in JavaScript, è possibile utilizzare vari approcci, come il ciclo `for...in` o i metodi `Object.keys()`, `Object.values()` e `Object.entries()`.

//? Iterazione con il ciclo `for...in`


for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}


//! Object.keys(), Object.values() e Object.entries() ===> restituiscono un array come risultato

const keys = Object.keys(person); //+ otteremo le key
console.log(keys); //? Output: ["name", "age", "greet"]

const values = Object.values(person); //+ otterremo i value
console.log(values); //? Output: ["Mario", 30, [Function: greet]]

const entries = Object.entries(person); //+ otterremo le coppie chiave : valore 
console.log(entries);
//? Output: [["name", "Mario"], ["age", 30], ["greet", [Function: greet]]]  ==> otteniamo un array contenente arrays corrispondenti alla coppia key value == [["key", "val"], ["key2", "val2"], ...]
