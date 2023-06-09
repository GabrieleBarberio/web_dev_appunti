//!! METODO SETINTERVAL

//* Il metodo setInterval ci permette di eseguire una funzione o un blocco di codice ad intervalli di tempo specificati.

//! Syntax
//+ setInterval(callback, intervallo(ms), arg1, arg2, ...)


//* Esegui una funzione ogni 1 secondo:
  
  setInterval(() => {
    console.log("Ciao!");
  }, 1000);
  
  //? Output: "Ciao!" ogni secondo
  
  //! Interrompere l'esecuzione:
  //+ Per interrompere l'esecuzione di setInterval, è necessario utilizzare il metodo clearInterval() passando l'ID restituito da setInterval;


  //* Salviamo quindi l'esecuzione all'interno di una costante
  
  const intervalID = setInterval(() => {
    console.log("Ciao!");
  }, 1000);
  
  //* passiamo l'id come argomento in clearInterval

  setTimeout(() => {
    clearInterval(intervalID);
  }, 5000);
  
  //? Output: "Ciao!" ogni secondo per 5 secondi, poi viene interrotta.
  
  //!! METODO SETTIMEOUT 

  //* Il metodo setTimeout ci permette di eseguire una funzione o un blocco di codice con una latenza programmata.
  
  //! Siyntax
  //+ setTimeout(funzioneCallback, ritardo, arg1, arg2, ...)
  
  

  //* Esegue una funzione dopo 3 secondi:
  
  setTimeout(() => {
    console.log("Ciao dopo 3 secondi!");
  }, 3000);
  
  //? Output: "Ciao dopo 3 secondi!" dopo 3 secondi

  
  //! Annullare il ritardo:
  //* È possibile annullare l'esecuzione di setTimeout utilizzando il metodo clearTimeout() passando l'ID restituito da setTimeout come per setInterval
  
  const timeoutID = setTimeout(function() {
    console.log("Ciao dopo 3 secondi!");
  }, 3000);
  
  clearTimeout(timeoutID);
  
  //? Nessun output poichè l'esecuzione viene annullata.