const $textP = document.querySelector("#text");
const $numberInput = document.querySelector("#number");
//state, una sorta di cache
const state = {
  counter: 0,
  number: 1,
};
const $addButton = document.querySelector("#add");
// ascolta l'evento su $addButton ( primo parametro elemento, secondo parametro funzione da triggerare)
$addButton.addEventListener("click", () => {
  state.counter += state.number;
  $textP.innerHTML = state.counter; // scrive dentro html
  console.log(state);
});

$numberInput.addEventListener("input", () => {
    state.number = Number($numberInput.value);  //casting per evitare che ritornata la stringa concateni ( numero più stringa)
    console.log(state);
})