// scrivere una funzione dati due array(i tuoi numeri) (numeri casuali, estratti)
//la funzione deve verificare quanti  numeri estratti sono presenti nell'array dei tuoi numeri
// in mase a quanti numeri sono presenti la funznione ritornerà ambo, terno, quaterno, cinquina e tombola nel caso in cui fossero presenti

const myNumb = generateNumbers();
const estratti = generateNumbers();



function generateNumbers() {
  let drawnNumbers = [];
  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.random() * 90 + 1; // math.floor math.round
    drawnNumbers.push(randomNumber.toFixed());
  }
  return drawnNumbers;
}

function tombola(casella, estratti) {
    let paragon = [];
  for (let i = 0; i < casella.length; i++) {
    if(casella.includes(estratti[i])) {
        paragon.push(estratti[i]);
    }
}

 
  switch (true) {
    case paragon.length == 2:
        return "Complimenti, hai fatto un ambo!";
    case paragon.length == 3:
        return "Complimenti, hai fatto un terno!"
    case paragon.length == 4:
        return "Complimenti, hai fatto una quaterna!"
    case paragon.length == 5:
        return "Complimenti, hai fatto una cinquina!"
    case paragon.length == 10:
        return "Tombola!"
    default:
        return "Ci dispiace, hai perso!"
        }
}
let check= tombola(myNumb, estratti);
console.log(check);
