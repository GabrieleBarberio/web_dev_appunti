let userName ;
userName = "Ciruzzo" ;
userName = "Ciro" ;
let userAge = 25 ; 
let userDayOfBirth = "10/12/1990" ;             
let userOccupation = "IT Student" ;
let userBankCount = 125000 ;
let userOnline = true ;
let buyCar = "Punto Abarth"
let carPrice = 25000;


let user = ["Ciruzzo" , 25 , "10/12/1990", "IT Student", 125000 , true , "punto Abarth" , 25000]
console.log(user);

let stringTheArray = user.join(" / ") /* il metodo join ci permette di convertire i dati di un array in un unica stringa, 
                                        nella parentesi di .join( "SEPARATORE" ) troviamo il separatore, ovvero un carattere 
                                        che possiamo utilizzare per separare gli elementi dell'array nella stringa es vedi
                                         console.log di stringTheArray*/ 
 console.log(stringTheArray);


 let str = "Ciruzzo / 25 / 10/12/1990 / IT Student / 125000 / true / punto Abarth / 25000" ;

 let arrayFromString = str.split( " / ") 
                                        /*   il metodo .split("SEPARATORE") ci permette di convertire una stringa in un array, laddove all'interno   
                                        della parentesi troviamo sempre l'elemento separatore, che in questo caso, il compilatore andrà a trovare e     
                                        lo utilizzerà per dividere i diversi elementi  nel nuovo array vedi console.log(arrayFromString)*/

 console.log(arrayFromString);



// con i metodi .unshift() ; .shift() .pop() ; .push() possiamo aggiungere e/o togliere elementi ad un array
//aggiunge all'inizio   toglie all'inizio                   aggiunge alla fine        toglie alla fine
//      unshift              shift              []              push                          pop



let rocco= ["Ciao","pippo","luisa","mariano"]

// user.pop();
// user.pop();
// user.pop();
user.push("Simone");
user.shift();
user.unshift( "Teresa");



for (let i = 0; i < user.length; i++) {
    console.log(user[i].toString());                // richiamare il valore di un indice dell'array con  user[0],user[1],user[2],user[3],user[4] ecc...
    
}
