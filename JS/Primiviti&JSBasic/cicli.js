//todo CICLI
//? Ciclo for

console.log("Ciclo for:");
for (let i = 0; i < 10; i++) {
  if (i%2 == 0) {
  }
  console.log(i);
}

//? Ciclo while
console.log("Ciclo while:");

let bool = false;
let i = 0;
while (i < 10 || bool == true) {
  console.log(i);
  i++;
}

i = 10;

//? Ciclo do while
console.log("Ciclo do while:");
do {
  console.log(i);
  i++;
} while (i < 10);

//todo FUNZIONI
//? Dichiarazione di funzione
/* 
function sum(num1, num2) {
  return num1 + num2;

}

console.log(sum(2, 5));

*/

//? Function expression

/* let sum2 = function (a, b) {
    console.log(a + b); 
};

sum2(3, 3); */

//? Arrow function

let sum3 = (num, num2) => {
  console.log(num + num2);
};

//? Callback functions
function boh() {
  sum3(2, 3);
}

const myFunction = (num, pippo) => {
  console.log(num);
  console.log(num);
  console.log(num);
  console.log(num);
  pippo();
};

myFunction(2, () => {});

const obj = { nome: "mario", cognome: "rossi" };

const obj2 = { ...obj };

obj2.nome = "Giovanni";

console.log(obj);
console.log(obj2);
