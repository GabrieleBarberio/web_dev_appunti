//!! ASYNC FUNCTION


//! Syntax

//+ async function nomeFunzione(parametri) {
//+   // Blocco di codice asincrono
//+ }

async function eseguiOperazione() {
    // Blocco di codice asincrono
    const response = await altreOperazioni();
    return response;
  }
  
  //* La parola chiave `await` viene utilizzata all'INTERNO di una funzione asincrona per attendere il completamento di una Promise e ottenere il suo valore risolto.
  
  //+ Gestione degli errori:
  //* È possibile gestire gli errori all'interno delle funzioni asincrone utilizzando il blocco `try-catch` come nelle funzioni sincrone.
  //* Per un maggiore controllo degli errori possiamo controllare lo stato della risposta grazie alla chiave ok (che corrisponde ad un valore booleano) dell'oggetto prototype fornito in js if(response.ok)
  
  async function eseguiOperazione() {
    try {
      const response = await operazione();
      if (response.ok){
          return response;
      }else{
        console.error(response) //? nel caso in cui response.ok sia false in response avremmo l'errore e con console.error ritorneremo il risultato dell'errore
      }
    } catch (errore) {
      console.error(errore);
    }
  }
  
  //? In questo esempio, viene utilizzato un blocco `try-catch` per gestire gli errori all'interno di una funzione asincrona. Se si verifica un errore durante l'esecuzione del blocco di codice asincrono, viene catturato nel blocco `catch` e l'errore viene stampato sulla console.
  
  //! `Promise.all()`
  //* `Promise.all()` consente di eseguire più promesse contemporaneamente e attendere il completamento di tutte le promesse.
  
  
  async function eseguiOperazioni() {
    const risultati = await Promise.all([operazione1(), operazione2(), operazione3()]);
    return risultati;
  }
  
  