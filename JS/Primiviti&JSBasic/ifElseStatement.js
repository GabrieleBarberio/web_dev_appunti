//se il nome utente è maggiore di 3 caratteri e minore di 12 caratteri va bene altrimenti no

let user = "Po";

// if(user.length > 3 && user.length < 12 ){
//     console.log("Nome utente valido");
// } else {
//     console.log("Nome utente non valido");
// }

// il nome utente deve essere maggiore di tre caratteri ma non deve essere uguale a Marco, Luca e Patrizio che sono gli admin del sito

//dichiaro la variabile user dopodichè utilizzo un if else statement nella cui coindizione dichiaro che user deve esse maggiore uguale di tre E user deve essere minore uguale di dodici  E diverso da marco E diverso da patrizio e diverso da luca
// se la condizione è vera eseguirà il comando console.log in cui stamperò "nome utente non valido" ALTRIMENTI eseguira il comando console log che stamperà "nome unanbfon"
user = "MArco";

if( user.length >= 3 && user.length <= 12 && user != "Marco" && user != "Patrizio" && user != "Luca"){
   console.log( "Nome utente valido!")

}else{
   console.log("Nome utente non valido!")
}



























// user = "Lucia Di Lorenzo";
// console.log( user.length);
// console.log(user);
// if ( user.length >= 3 && user.length <= 12 && user != "Marco" && user != "Patrizio" && user != "Luca") {
//    console.log( "Nome utente valido" );
// } else {
//    console.log("Nome utente non valido");
// }























// let startCuttingAt = user.indexOf("Lucia");
// let stopCuttingAt = user.indexOf( " ");
// user = user.slice(0 , 5 )
// console.log(user.length);
// console.log(user);

//  if ( user.length > 3 && user.length < 12 && user != "Marco" && user != "Patrizio" && user != "Luca") {
//     console.log( "Nome utente valido" );
//  } else {
//     console.log("Nome utente non valido");
// }



