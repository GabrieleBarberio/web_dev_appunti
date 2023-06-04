//callbacks asincrono

//Ciò che intendiamo per asincrono è che qualcosa viene esehuita un po' più tardi rispetto a quando la chiamiamo per la prima volta

function repeat(callback, n) {
  let id = setInterval(callback, 500);
  setTimeout(() => clearInterval(id), 500 * n);
}
//                              callbacks           n
repeat(() => console.log("verrò ripetuto 5 volte"), 5);

console.log("i run!");

//i run verrà eseguito per primo, questo fa della funzione scritta con set timeout e set interval una funziona asincrona
