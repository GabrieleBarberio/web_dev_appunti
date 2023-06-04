//!!------------------------[ Cos'è un oggetto ]----------------------------


//* 	-Tipo non primitivo
//* 	-Rappresentazione dati più complessa
//* 	-Raggruppare più dati
//* 	-Forma più utilizzata nel trasferimento di dati (form)


//!-------------------[ Come si prensenta un oggetto ]---------------------

//* -Proprietà = Chiave : Valore 

//* const oggetoVuoto = {};



const pizza = {
	name: 'Margherita',
	born: 1889,
	isGood: true,
	ingredients: {
		tomato: true,
		mozzarella: true,
		basil: false
	},
	cook: () => console.log('This Margherita is cooking.'),
	cookFunc: function () {
		console.log('Cooking function');
	}
};

console.log(pizza);

//!-----------------[ Ottenere i valori di un oggetto ]--------------------

//+ Dot notation 

const pizzaName = pizza.name;

console.log(pizzaName);

//+ Bracket notation 

 const pizzaNamee = pizza['name']; 

console.log(pizzaNamee);

//+ Quando utilizzare la bracket notation 

const key = 'name';

const value = pizza[key];

console.log(value);

//!----------------------[ Modificare un oggetto ]-------------------------

//* Aggiungere proprietà 

// console.log(pizza);

// pizza.count = 12938021382109;
// pizza['price'] = '6.49€';

// console.log(pizza);

//* Modificare proprietà 

// console.log(pizza);

// pizza.name = 'Margherita 2.0';
// pizza['isGood'] = false;

// pizza.ingredients.basil = true;

// console.log(pizza);

//* Eliminare proprietà */

// console.log(pizza);

// delete pizza.isGood;
// delete pizza.ingredients.basil;

// console.log(pizza);

//!------------------------[ Optional chaining ]---------------------------


// const tomato = quattroFormaggi.ingridients?.name;

// console.log(quattroFormaggi.ingridients?.name); //+ se non trova il percorso ci ritorna il valore di undefined invece di bloccare il codice

//!-----------------------[ Copiare un oggetto ]---------------------------

/* Value - Reference */
// let num1 = 34;
// let num2 = num1;

// console.log(num1, num2);

// num1 = 50; // riassegnazione del valore

// console.log(num1, num2);

// ---
 
// const newPizza = {}; 

// Object.assign(newPizza, pizza);

// console.log(pizza, newPizza);

// newPizza.name = '4 Formaggi';

// console.log(pizza, newPizza);

//------------------------------------------------------------------------

// Domande ??

//!-------------------------[ Operatore *in* ]-----------------------------

// if ('isGood' in pizza) {
// 	console.log('isGood è dentro pizza');

// 	if (pizza.isGood) {
// 		console.log('La pizza è buona!');
// 	} else {
// 		console.log('La pizza non è buona!');
// 	}
// } else {
// 	console.log('isGood non è in pizza');
// }

//!--------------------[ Iterazione di un oggetto ]------------------------

// for (const key in pizza) {
// 	if (key === 'ingredients') {
// 		const value = pizza[key].tomato;

// 		console.log(value);
// 	}

// 	console.log(key);

// 	const value = pizza[key];

// 	console.log(value);
// }

//!-----------------[ Constructor functions (deprecated) ]--------------------------

//? la funzione costruttore si scrive con la seguente sintassi:
//!!Syntax

//? dichiarazioneFunzione  Nome|con lettera maiusc|(parametri){
//?	 this.key = param (per convenzione e chiarezza nel codice usiamo la ridondanza key = param )
//? }

function Pizza(name, born, isGood, ingredients) {
	this.name = name;
	this.born = born;
	this.isGood = isGood;
	this.ingredients = ingredients;
	this.cook = (degrees) => console.log(this.name + ' is cooking at ' + degrees + ' degrees');
	this.cookFunc = function () {
		console.log(this.name + ' is cooking!');
	};
	this.addIngredient = (name, value) => {
		this.ingredients[name] = value;
	};
}

// const margherita = new Pizza('Margherita', 1889, true, { tomato: true, mozzarella: true });

// console.log(margherita);

// margherita.addIngredient('patatine', true);

// console.log(margherita);

// const gorgonzolaCipolla = new Pizza('Gorgo e cipolla', null, true, { gorgo: true, onion: true });
