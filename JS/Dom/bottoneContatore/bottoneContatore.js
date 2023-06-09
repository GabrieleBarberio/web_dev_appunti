const $textP = document.querySelector("#text"); //? ottengo l'elemento HTML con id text
const $numberInput = document.querySelector("#number"); //? ottengo l'elemento HTML con id number
const $addButton = document.querySelector("#add"); //? ottengo l'elemento HTML con id add

//* state, oggetto in cui cewntralizziamo i dati
const state = {
  counter: 0, //+ impostazioni counter
  number: 1,
};

//+ .addEventiListener "ascolta" l'evento su $addButton, click in questo caso ( primo parametro evento, secondo parametro funzione da triggerare)
//?in questo caso il target dell'evento è il bottone collegato alla variabile, vedi "delegate" per capire meglio il concetto di "target" dell'evento
$addButton.addEventListener("click", () => {
  state.counter += state.number;
  $textP.innerHTML = state.counter; // scrive dentro html
  console.log(state);
});
 
//+ .addEventiListener "ascolta" l'evento su $numberInput, input in questo caso
$numberInput.addEventListener("input", () => {
    state.number = Number($numberInput.value);  //casting per evitare che ritornata la stringa concateni ( numero più stringa)
    console.log(state);
})