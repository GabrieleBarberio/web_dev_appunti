// // let const var

// let person = "Ciro"; // string

// let personOnline = true; // boolean

// let personAge = 44 ; // number

// let number = 12 + 2 * 7 + 4 / 2 ;

// console.log(number);
// let originalShoes = 'Nike';
// let model = 'Vapormax';
// let price = 195; 

// let sales = (195) - (195 / 10);

// console.log('Questo è il prezzo gia scontato ' ,sales);

let carModel = "Urus";
let carBrand = "Lamborghini";
let carAge = 2;
let carPrice = 200000;

let carModel1 = "Punto";
let carBrand1 = "Fiat";
let carAge1= 0;
let carPrice1 = "10000";

/*  possiamo accedere ad un segmento di stringa trattandolo come un array
    in questo caso con il log di  carBrand[39] otteremo il carattere "l"*/

//                        1         2         3         4        5
//              01234567890123456789012345678901234567890123456780
let carrBrand = "La marca di questa macchina è il brand lamborghini";

console.log(carrBrand[39]);
console.log(carrBrand.length);
console.log(carrBrand.slice()); // carrBrand.slice( 39 , 44 )


//                                  valore da cercare       ,   valore con cui verrà sostituito
let correction = carrBrand.replace(     "lam"               ,           "Lam"   );
console.log(correction);

let startCuttingAt = carrBrand.indexOf("macchina");
let stopCuttingAt = carrBrand.indexOf("br");
let afterCut = carrBrand.slice(startCuttingAt, stopCuttingAt);

console.log(carrBrand);
console.log(afterCut);



