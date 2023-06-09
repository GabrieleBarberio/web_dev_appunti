//!!FETCH()

//* Il metodo fetch() consente di effettuare richieste HTTP asincrone per ottenere e inviare dati da e verso un server.

//! Sintax

//+ fetch(url, opzioni)

//* opzioni prende come argomento un oggetto che contiene le opzioni per la richiesta come il metodo HTTP, l'intestazione, i dati, ecc.

//! Eseguire una richiesta GET:

fetch("https://api.example.com/data") //* senza passare il parametro delle opzioni fetch effettua automaticamente una chiamata GET
  .then(response => { //response è un oggetto prototype
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nella richiesta");
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

//? Questo esempio esegue una chiamata GET all'URL "https://api.example.com/data". Se la risposta HTTP è OK (codice 200), 
//? viene restituito il corpo della risposta come oggetto JSON e stampato sulla console. 
//? In caso di errore nella chiamata, viene generato un errore e gestito tramite il blocco catch.

//! Esegui una chiamata POST con dati:

const dati = {
  nome: "Mario",
  età: 30
};

fetch("https://api.example.com/utenti", { method: "POST",  headers: { "Content-Type": "application/json"  }, body: JSON.stringify(dati) }) // passandogli l'oggetto effettuiamo una chiamata POST
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nella richiesta");
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

//? Questo esempio esegue una chiamata POST all'URL "https://api.example.com/utenti" con i dati specificati nell'oggetto `dati`. 
//? I dati vengono inviati come corpo della richiesta JSON. La risposta viene gestita allo stesso modo dell'esempio precedente.

//+ Personalizzazione delle opzioni:
//* È possibile personalizzare ulteriormente le opzioni della richiesta fornendo diversi parametri come il metodo HTTP, le intestazioni, la modalità di richiesta, i cookie, ecc. 
//  vedi di più: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//+ Gestione dell'autenticazione:
//* Se è necessaria l'autenticazione per la richiesta, puoi includere i token o le credenziali nelle intestazioni della richiesta.

fetch("https://api.example.com/dati-protetti", {
  headers: {
    authorization: "token"
  }
})
  .then(response => {
    // Gestisci la risposta
  })
  .catch(error => {
    console.error(error);
  });