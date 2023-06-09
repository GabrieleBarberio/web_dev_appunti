//!! TRY-CATCH STATEMENT

//* La sintassi `try-catch` consente di gestire gli errori in modo controllato, evitando che il programma si interrompa in caso di errori.

//! Syntax
//+ try {
//+   // Blocco di codice in cui potrebbe verificarsi un'errore
//+ } catch (errore) {
//+   // Blocco di codice che gestisce l'errore
//+ }


try {
    // Blocco di codice che potrebbe generare un'eccezione
    const risultato = 10 / 0;
    console.log(risultato);
  } catch (errore) {
    // Blocco di codice che gestisce l'eccezione
    console.error("Si è verificato un errore:", errore);
  }
  
  //? Output: Si è verificato un errore: InfinityDivideByZeroError: Divisione per zero
  
  //* Nel blocco `try`, viene eseguito il codice che potrebbe generare un'eccezione. 
  //* Se viene sollevata un'eccezione, il controllo passa al blocco `catch`, dove è possibile gestire l'errore. 
  //* L'oggetto prototype `errore` contiene le informazioni sull'eccezione, come il messaggio di errore e il tipo.
  
  //! finally
  //* È possibile utilizzare anche il blocco `finally`, che viene eseguito sempre, sia che si verifichi un'eccezione o meno come in .then .catch.
  // Si può anche usare try finally senza catch dell'errore
  
  //! Syntax
  try {
    // Blocco di codice che potrebbe generare un'eccezione
  } catch (errore) {
    // Blocco di codice che gestisce l'eccezione
  } finally {
    // Blocco di codice eseguito sempre
  }
  
  
  try {
    console.log("Blocco try");
    throw new Error("Errore generato manualmente");
  } catch (errore) {
    console.error("Blocco catch:", errore);
  } finally {
    console.log("Blocco finally");
  }
  
  //? Output:
  //?         Blocco try
  //?         Blocco catch: Error: Errore generato manualmente
  //?         Blocco finally
