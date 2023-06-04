//!!  scope globale
//+ let nome = "Gabriele";

//? printWellcome();

let print = () => {
  if(nome == "Gabriele"){
    return `Benvenuto ${nome}`;
  }else{
    return `Non sei il benvenuto`;
  };
};
console.log(print());

function printWellcome() {
   //+ function scope

   if(nome == "Gabriele"){
 //+  block scope :function scope, block scope, scope globale
   console.log( `Benvenuto ${nome}`);
 }else{
   console.log(`Non sei il benvenuto`);
}
}



function isThisSum(a, b) {
  //? prende in entrata due parametri
  let maybeSum = (a * b) ** 2; //?  vine dichiarata una variabile all'interno dello scope della funzione che moltiplica a e b e la somma viene elevata alla seconda
  return () => {
    //? ritorniamo una funzione che stampi il valore  del risultato di maybeSum moltiplicato per due
    let sum = maybeSum * 2;
    console.log(sum);
  };
};

const riferimento = isThisSum(10, 57); //+ non stamperà nulla perché il valore della varibile  maybeSum viene eliminato appena dopo la
//+ fine del calcolo e la variabile sum nella seconda funzione non riesce a trovare il valore
                               
//? console.log(riferimento); //  <---

//+  riferimento(); //invocandola come funzione invece riusciremo a tenere in memoria tutto il calcolo fino alla fine di entrambe le funzioni

//? function outer() {
//?   const auth = "Gabriele";
//* questo scope ha accesso allo scope di outer
//?   function inner() {
//*  qui abbiamo accesso a inner, outer e allo scope globale.
//?     function inceerInner(){
//* qui abbiamo accesso a innerInner, inner, outer e allo scope globale.
//?     }
//?   }
//? }
//!  OGNI FUNZIONE INTERNA PUO' ACCEDERE ALLO SCOPE DELLA FUNZIONE/DELLE FUNZIONI "GENITORE" MA NON VICEVERSA!

                                                              //!!CLOSURE
//+ closure = A function with preserved data. Give you access to an outer function’s scope, from an inner function. 
//+ State of variables in outer scope are "saved". Variables in outer scope are considered "private".

// **************************

const scores = function(){

  let points = 0;

  return function(){

      points += 1;
      return points;
  }
}();

//points += 100; //ERROR
console.log(score());
console.log(score());
console.log(score());

//* Il principio di base su cui si fonda questo meccanismo stabilisce che ogni variabile che era accessibile quando una funzione è stata definita
//* rimane "racchiusa" nello scope accessibile dalla funzione. 
//* Questo meccanismo è detto closure.*/

function outerFnc() {
  //+ definiamo la funzione esterna outerFnc.
  //+ questa funzione ha una variabile locale "user" e una secona funzione interna "innerFnc".
  //*   scope: outerFnc
  //?   closure: outerFnc, globale

  let user = "Alfredo1234";
  //* definiamo la variabile "user" e la assegniamo a una stringa "nomeutente".

  let innerFnc = () => {
    //* Definiamo la funzione interna innerFnc.
    //+   scope: innerFnc
    //+   closure: innerFnc, outerFnc, globale

    let pass = `"123456789o!E"`;
    //* Definiamo la variabile "pass" e la assegniamo a una stringa di password.

    const info = `${user} e la sua password ${pass}`;
    //* Concateniamo la variabile "pass" e la variabile "user" per formare la stringa "sum".

    return () => {
      //* Definiamo una funzione interna di innerFnc, innInnerFnc.
      //+   scope: questo scope
      //+   closure: questo scope, innerFnc, outerFnc, globale

      let emailAddress = "cicciopanza34@gmail.com";
      //* Definiamo la variabile "emailAddress" e la assegniamo un indirizzo email.

      console.log(
        `Questo è il suo nome utente: ${info} collegata all'email: ${emailAddress}`
      );
      //* Stampiamo una stringa che contiene il valore della variabile "sum" e della variabile "emailAddress".
    };
  };

  return innerFnc();
  //* La funzione outerFnc restituisce il risultato della funzione innerFnc.
}

 outerFnc()();
//* Assegniamo il risultato della funzione outerFnc alla costante "resetInfo".


//? console.log(resetInfo);
//? resetInfo();
//* Chiamiamo la funzione restituita dalla funzione outerFnc per visualizzare l'output nella console.

//? let arr = [ 2, 4, 7, 32, 5];

//? console.log(...arr);

//?   console.log(Math.max(...arr));


let saluto = "Buongiorno";
let visualizzaSaluti;
function saluta(persone) {
	let nomeCognome;
	let saluti = [];
	for (let i in persone) {
		nomeCognome = persone[i].nome + " " + persone[i].cognome;
		saluti.push(((nc) => {  //* pushiamo nell'array saluti una fuinzione immediata che ritorni una funzione che svolge il compito desiderato
						return () => { //* così che bypassiamo 
							console.log(saluto + " " + nc);
						};
					})(nomeCognome));
	}
	return saluti;
}
//* visualizzaSaluti = saluta([{nome: "Mario", cognome: "Rossi"},
//*                            {nome: "Marco", cognome: "Neri"}]);
//* for (let i in visualizzaSaluti) { visualizzaSaluti[i](); }

//* Il codice evidenzia come, al posto di aggiungere nell'array direttamente la funzione incaricata di visualizzare il saluto, 
//* definiamo una funzione che restituisce la funzione desiderata dopo averla invocata passando la variabile nomeCognome come parametro. 
//* In questo modo fissiamo il valore della variabile eliminando di fatto il riferimento diretto alla variabile nomeCognome. 