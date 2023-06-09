// SYNTAX VARIABILI 
//  kw  name   av  value ;   
    let stringCamel1 = true;// number string boolean
//TIPI PRIMITIVI
let string2 = "ciao sono gabriele";// string 
let string3 = 1234;// number 
let string4 = true;//boolean
//CONFRONTI 
// console.log(Number(string1)) // 8
// string2 = Boolean(string2) ; // true
// console.log(Number(string2) ); //1
// console.log(string1); // "8"
// console.log(string2); // True

 
//OPERATORI ARITMETICI

//Confronto
// == === != !== < > <= >= 
//Calcolo
// + - * / += -= *= /= **  ++ -- 
// console.log( string1 == string2 )


//OPERATORI LOGICI
 
//&& and  / || or  / ? ternary
//  && And == entrambi gli elementi a conforonto sono veri 
//  || OR == uno o l'altro sono veri
//TERNARY 


//    el          confronto         el  ternario  v    :     f
//   elmento1 (operatore logico) elmento2 ? "se è vero" : "se è falso"



  //ternary con &&
 let tern =  string3 > 5 && string4 == true ? "la condizione  è vera" : "la condizione è falsa";
// ternary  || (una vera )
let ternOr = string3 > 5 || string4 == false ? "la condizione è vera" : "nessun dato è vero" ;
// ternary || (entrambe false)
let ternOr1 = string3 < 5 || string4 == false ? " la variabile è maggiore di 5" : "nessun dato è vero" ;

// console.log(ternOr);
// Array : indice ordinato di dati

//SYNTAX
//          [ 0,    1      ,   2   ,        .title                                               ]
let array = [ 1, "stringa" , false, { key : "value", key2 : 3}, [  "gianmarco", "davide",] ]  

// console.log(array.length);
// let new3 = string2.slice( 4, 8)
// console.log(new3);
// console.log(string2);
// // accedere al valore degli indici === array[nIndice]

//  console.log( array[4]);


//Cicli FOR | FOR IN | WHILE | DO WHILE 

//FOR SYNTAX

// kw  ( dichiarazione indice ; condizione  ; incremento/decremento ){ corpo del ciclo }
let arr = [2,4,5,6]; 
let sum = 0;
for (let i = 0; i < arr.length ; i++) {
    // console.log("_______indice+" + i+ "_______");
    // console.log(sum + " sum prima del calcolo");
    // console.log( i + " indice ");
    // console.log(sum += i  ," calcolo") ;
    // console.log(sum + " Dopo il calcolo");
    console.log(arr[i]);
    sum += arr[i];   
}
console.log(sum)

// IF ELSE STATEMENT

//   elmento1 (operatore logico) elmento2 ? "se è vero" : "se è falso"

//kw
    // if (condition) {
    //     //corpo if block scope
    // }else{
    //     //block scope
    // }         
    if ( (ternOr == tern && typeof password === "string") || 2<10){

    console.log( "va tutto bene");
    } else{
        console.log( "non va bene");
    }


// function little(array) {
//     let confronto = array[0]
// for (let i = 0; i < array.length ; i++ ){
//      () => {if (array[i] < confronto){
//         confronto = array[i];
//         return confronto;}

//     } 
// }    
// }

// let res = little(sum);
// console.log(res());