// Documentazione dell'oggetto JSON

/**
 * Il metodo `JSON.stringify()` converte un oggetto JavaScript in una stringa JSON.
 * @param {*} value - L'oggetto JavaScript da convertire in una stringa JSON.
 * @param {Function|Array} [replacer] - Una funzione di trasformazione o un array di proprietà da includere nella serializzazione.
 * @param {string|number} [space] - La stringa o il numero che specifica lo spazio da utilizzare per l'indentazione nella stringa JSON di output.
 * @returns {string} La stringa JSON risultante.
 */
const jsonStringifyDocs = () => {
    const obj = { name: 'John', age: 30 };
    const jsonString = JSON.stringify(obj);
    console.log(jsonString); // Output: '{"name":"John","age":30}'
  };
  
  /**
   * Il metodo `JSON.parse()` converte una stringa JSON in un oggetto JavaScript.
   * @param {string} text - La stringa JSON da convertire in un oggetto JavaScript.
   * @param {Function} [reviver] - Una funzione di "revival" che personalizza la creazione degli oggetti durante il parsing.
   * @returns {*} L'oggetto JavaScript risultante.
   */
  const jsonParseDocs = () => {
    const jsonString = '{"name":"John","age":30}';
    const obj = JSON.parse(jsonString);
    console.log(obj); // Output: { name: 'John', age: 30 }
  };
  
  /**
   * Il metodo `JSON.parse()` con riviver function personalizza la creazione degli oggetti durante il parsing.
   * @param {string} text - La stringa JSON da convertire in un oggetto JavaScript.
   * @param {Function} reviver - Una funzione di "revival" che personalizza la creazione degli oggetti durante il parsing.
   * @returns {*} L'oggetto JavaScript risultante.
   */
  const jsonParseWithReviverDocs = () => {
    const jsonString = '{"name":"John","age":30}';
    const obj = JSON.parse(jsonString, (key, value) => {
      if (key === 'age') {
        return value + 10; // Incrementa l'età di 10
      }
      return value;
    });
    console.log(obj); // Output: { name: 'John', age: 40 }
  };
  
  // Esecuzione dei metodi di documentazione
  jsonStringifyDocs();
  jsonParseDocs();
  jsonParseWithReviverDocs();
  