/*CLASSE = 
oggetto js che puo essere inizializzato  e rappresenta un costruttore può presentare dati o metodi, all'interno di una classe abbiamo un contesto definibile
all'interno di una singola chiave, con this. (riflessione di se stessa) abbiamo accesso da qualsiasi  punto all'interno della classe a qualsiasi dato salvato nel context della classe
ad eccezione dei metodi e dei parametri statici.
Esistono parametri e metodi privati, ovvero che non sono accessibili ne in lettura ne in scrittura fuori dal contesto della classe. 
Get e Set, due parametri contenuti nelle chiavi */

                                                            // SYNTAX (INTRODOTTA IN ES6)
//key  nome     graffe
 class Nome {
// //scriviamo il costruttore
     constructor(a, b) {
         this.a = a;
         this.b = b;
         this.result = null;
     }
     method1(){ a + b }
     method2(){ a - b }
     method3(){ a * b }
    // ...
    };

//proviamo a creare una classe student e due metodi, uno che stampi il nome cognome e matricola e l'altro che stampi le materie di indirizzo

class Student {
  constructor(firstName, lastName, id, mainSubject, secondarySubject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.mainSubject = mainSubject;
    this.secondarySubject = secondarySubject;
  }

  getInfo = () => {
    this.info = `Lo studente si chiama ${this.firstName} ${this.lastName} con matricola: ${this.id} `;
    return console.log(this.info);
  };

  getSubject = () => {
    this.info2 = `${this.firstName} ${this.lastName} studia: ${this.mainSubject} e ${this.secondarySubject}`;
    return console.log(this.info2);
  };
}

//creiamo l'aggetto tramite la classe
const Susan = new Student(
  "Susan",
  "Bertolli",
  "s01b438",
  "HTML, CSS, Javascript",
  "Git, Angular"
);

// Susan.getSubject()
// Susan.getInfo()

// scriviamo una classe che esegua dei calcoli

//  class Calculator {
//     //scriviamo il costruttore che prenda i parametri per il nostro calcolo
//          constructor(a, b) {
//              this.a = a;
//              this.b = b;
//              this.result = null;
//          }};
//     sum = () => { // scriviamo un method che si occupi dell'operazione
//         this.result = this.a + this.b;
//     }

//     log = () =>{ //scriviamo un metodo che stampi il risultato del metodo sum
//         console.log(this.result);
//     }
// };

// const calculator = new Calculator(2, 4);

// calculator.sum()

// calculator.log() // senza il return non possiamo concatenare questi metodi uno dietro l'altro:

// class Calculator {
//     //scriviamo il costruttore
//         constructor(a, b) {
//             this.a = a;
//             this.b = b;
//             this.result = null;
//         }

//         sum = () => {
//             this.result = this.a + this.b;
//             return this; //return dei valori
//         }

//         log = () =>{
//             console.log(this.result);
//             return this; //return dei valori
//         }
//     };

//     const calculator = new Calculator(2, 4);

//     calculator.sum().log() //ora possiamo concatenare i method nell'oggetto creato con la nostra classe

/* Scriviamo una classe che crei un oggetto persona*/

class Person {
  constructor(firstName, lastName, age, nationality) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (typeof age === "number") {
      // aggiungiamo un controllo di tipo sul dato inserito
      this.age = age;
    } else {
      this.age = Number(age); // ci assicuriamo che il dato inserito sia di tipo number
    }
    this.nationality = nationality;
  }
}

                                                                /* EXTEND */

// EXTEND la Classe | possiamo estendere una classe ad un altra per andare a modificare solo determinati dati che ci interessano senza dover riscrivere tutti il codice che voggliamo "importare" dall'altra

//dichiariamo la classe Student come estensione della classe Person,
class Studente extends Person {
  constructor(firstName, lastName, age, nationality, subject) {
    //dichiariamo gli argomenti che vogliamo che abbia il nostro nuovo oggetto
    //grazie alla keyword super permettiamo alla classe figlio di ereditare i comandi dalla classe genitore
    super(firstName, lastName, age, nationality);
    this.subject = subject; // aggiungiamo poi quell che desideriamo specificare nella nostra nuova classe Student
  }
}
const gabriele = new Studente("Gabriele", "Barberio", "28", "Italiana", "Front End");
const davide = new Person( "Davide", "Simone", 25, "Italiana");


//possiamo creare diverse classi che abbiano come prototipo la classe Person
class Worker extends Person {
  constructor(firstName, lastName, age, nationality, job) {
    super(firstName, lastName, age, nationality);
    this.job = job;
  }
}

                                                                /* PROTOTYPE CHAIN */

/* La "prototype chain"  è un meccanismo che consente di definire la gerarchia degli oggetti e la loro relazione di ereditarietà.
Ogni oggetto ha un riferimento al suo "prototype", ovvero un oggetto dal quale l'oggetto stesso eredita proprietà e metodi.
Questo oggetto prototipo può avere a sua volta un riferimento al suo prototipo, e così via, fino ad arrivare all'oggetto "Object.prototype", 
che è il prototipo di base per tutti gli oggetti in JavaScript.
Quando si cerca di accedere ad una proprietà o un metodo di un oggetto, JavaScript cerca prima nella definizione dell'oggetto stesso e, se non la trova, 
cerca nella catena dei prototipi dell'oggetto fino a raggiungere l'oggetto "Object.prototype". 
Se la proprietà o il metodo non viene trovato in nessun oggetto nella catena dei prototipi, viene restituito il valore "undefined".
L'oggetto null rappresenta la fine della catena dei prototipi e indica che l'oggetto non ha alcun prototipo. */

// console.log(Studente.__proto__ == Person);
// console.log(Person.__proto__.__proto__ == Object.prototype);
// console.log(Object.__proto__.__proto__ == null);
// console.log(Person.__proto__);
// console.log(Object.__proto__.__proto__.__proto__ == null);
//              Pizza-------
//                          |
//                          v
// Studente --> Person.type --> Object.type --> null prototype (obj).type --> null
//                 ^
//                 |
//  Worker.type---------
//     |
//dev.type--

Object.type = "standard obj"; // in questo caso andiamo ad impostare il valore "standard obj" che corrisponde alla chiave type a tutti gli oggetti
 console.log(gabriele.type);

/* è possibile definire anche i "public field", ovvero proprietà pubbliche che possono essere assegnate direttamente all'istanza della classe senza dover 
passare per il costruttore, questi field possono anche essere presettati come default e non hanno bisogno di essere dichiarati con parole chiave come let o const.
I public field vengono sempre memorizzati come proprietà dell'istanza della classe. Ciò significa che possono essere facilmente 
sovrascritti o modificati senza controllo.
*/

// class Person {
//   firstName; //firstName = "";
//   lastName; //lastName = "";
//   age; //age = 0;
//   nationality; //nationality = "";
//   constructor(firstName, lastName, age, nationality) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     if (typeof age === "number") {
//       // aggiungiamo un controllo di tipo sul dato inserito,
//       this.age = age;
//     } else {
//       this.age = Number(age); // ci assicuriamo che il dato inserito sia di tipo number
//     }
//     this.nationality = nationality;
//   }
// }
                                                            /* STATIC */


/* Per quanto riguarda gli elementi statici invece abbiamo bisogno di dichiarare la keyword "static" e possiamo 
richiamarli/accedere al valore nella classe stessa ma non negli oggetti che creiamo */

//aggiungiamo un parametro statico (acessibili solo dalla classe stessa), non hanno nulla a che fare con il context dell'oggetto ed hanno un ruolo specifico (le opzioni)

    class Calculator {
        //scriviamo il costruttore
            constructor(a, b) {
                this.a = Calculator.toNumber(a);
                this.b = Calculator.toNumber(b);
                this.result = null;
            }
//          key per dichiarare lo statico
            static multiplier = 2;  // parametro statico
            static toNumber = (value) => { //method statico
                if(isNaN(value)){
                    console.error('Value must be a valid number')
                    return
                }
                return Number(value)
            }

            sum = () => {
                this.result = this.a + this.b;
                return this;
            }

            multiply = () => {
                this.result *= Calculator.multiplier;   //Calculator.multiplier ci da accesso agli elementi statici,
                return this;                            //in quanto per accedervi dobbiamo dichiarare la classe in cui sono presenti 
            }                                           //( non accessibili direttamente dall'ogggetto creato
            
            log = () =>{
                console.log(this.result)
                return this;
            }
        };

        Calculator.multiplier = 3; // cambio multiplier, ovvero un parametro statico che stiamo cambiando nella classe stessa( cambia in tutto il file?)

        const calculator = new Calculator("2", 4);

        calculator.sum().log().multiply().log()

                                                        /*Parametri e metodi privati*/
/*In alcuni casi potrebbe essere necessario rendere dei parametri e methodi privati, ovvero accessibili solo all'interno della classe o all'interno di 
  un istanza della classe per farlo adoperiamo il # come se fosse una keyword  */
//     class Calculator {
//         //# dichiariamo elemento privato

//         #divider = 2;

//         //scriviamo il costruttore
//             constructor(a, b) {
//                 this.a = Calculator.toNumber(a);
//                 this.b = Calculator.toNumber(b);
//                 this.result = null;
//             }
// //          key per dichiarare lo statico
//             static multiplier = 2;

//             static toNumber = (value) => {
//                 if(isNaN(value)){
//                     console.error('Value must be a valid number')
//                     return
//                 }
//                 return Number(value)
//             }

//             sum = () => {
//                 this.result = this.a + this.b;
//                 return this;
//             }

//             multiply = () => {
//                 this.result *= Calculator.multiplier;  //Calculator.ci da acccesso agli elementi statici
//                 return this;
//             }
//      rendiamo privato il metodo con l'invocazione #_divide
//      sarà accessibile  solo all'interno dell'istanza
//             #_divide = () => {
//                 return this.result / this.#divider;

//             }
//      utilizziamo il metodo privato all'interno di un metodo pubblico della funzione 
//      per poterlo utilizzare all'interno del foglio senza poter modificare la funzione privata
//             divide = () => {
//                 this.result = this.#_divide();
//                 return this;
//             }

//             log = () =>{
//                 console.log(this.result)
//                 return this;
//             }
//         };

//         Calculator.multiplier = 3; // cambio multiplier

//         const calculator = new Calculator("2", 4);

//         calculator.sum().log().multiply().log().divide().log()
//         console.log(calculator);

//                          GET e SET
// SYNTAX
// kw  name () { }
// set  age(newVal){
// }
// get  age(){
//
// }

class Person {
  firstName; //firstName = "";
  lastName; //lastName = "";
  #age; //age = 0;
  nationality; //nationality = "";
  constructor(firstName, lastName, age, nationality) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (typeof age === "number") {
      // aggiungiamo un controllo di tipo sul dato inserito,
      this.#age = age;
    } else {
      this.#age = Number(age); // ci assicuriamo che il dato inserito sia di tipo number
    }
    this.nationality = nationality;
  }
//  per chiamare questo metodo fuori dall'istanza

  set  age(newVal){
    if (newVal < 1){
      this.#age = 1;
    } else if (newVal > 110){
      this.#age = 110;
    }else {
      this.#age = newVal;
    }
    }
  
  
  get age(){
    return this.#age;
  }
}

//  per chiamare questo metodo fuori dall'istanza
//  lo invochiamo come una funzione andando ad assegnare 
//  come valore quello che vogliamo passare come parametro 
gabriele.age = 25;
//  in questo modo ci assicuriamo che il valore di #age non sia accessibile direttamente 
//  nè  tantomeno modificabile se non dopo essere passato in nel controllo da noi impostato
//  con get abbiamo instanziato un metodo che ci permette di vedere il valore di un field privato
//  per utilizzarlo facciamo lo stesso procedimento di set:
console.log(gabriele.age);
//  senza impostare un set il metodo get ci rende la variabile in sola lettura, 
//  mentre quando impostiamo il metodo get set su una variabile privata diciamo 
//  che stiamo proteggendo la stessa (variabile protetta)
//  per convenzione tutte le varibili protette dovrebbero iniziare con _nomeVariabile.