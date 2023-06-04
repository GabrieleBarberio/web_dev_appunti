// //Reduce//
// const data = [
//     { id: 1, price: 200 },
//     { id: 2, price: 2400 },
//     { id: 3, price: 2030 },
//     { id: 4, price: 100 },
//     { id: 5, price: 4060 },
//     { id: 6, price: 300 },
//     { id: 7, price: 290 },
//     { id: 8, price: 8500 },
//     { id: 9, price: 9500 },
//     { id: 10, price: 7650 },
//   ]

//   const avarege = data.reduce ((pre, curr) => {
//     return pre + curr.price;
//     //      0 -> 0 + 200 = 200
//     //      1 -> 200 + 2400 = 2600
//     //      2 -> 2600 + 2030 =  4630
//   }, 0) / data.length; //data.lenght = il numero degli array nella costante 
//   //imposto il callback 
//   //i parametri si dividono con la virgola 
//   //dopo la virgola stecifichiamo da dove partire (initial value)current value indice 0 dell'array
//   //lo 0 è da dove deve partire, altrimenti sarà undefined 
//   //in previus un numero in current l'elemento dell'array 

//   // reduce andrà dall'indice 0 in poi (9) 
//   // il previus value ad ogni giro avrà il valore restitutito dalla callback precedente
  
//   //Classe 
//   //dichiarazione di classe 
//   class Calc {
//     #multiplier = 2;

//     constructor(a, b){
//         this.a = Calc.toNumber(a);
//         this.b = Calc.toNumber(b);
//         this.finalSum = null;
//     }

//     static divider = 2;
    

//     static toNumber = (value) => {
//       if (isNaN(value)) {
//         console.error("Value must be a number")
//         return;
//       }
//       return Number(value)
//     }


//     //metodo 
//     sum = () => {

//         this.finalSum = this.a + this.b; //salviamo in finalSum il valore della somma 
//         return this;
//     }

//     divide = () => {
//       this.finalSum /= Calc.divider;
//       return this;
//     }

//     multiply = () => {
//       this.finalSum *= this.#multiplier;
//       return this;
//     }

//     log = () => {
//         console.log(this.finalSum);
//         return this; //la funzione si esegue con le tonde 
//     }

//     getMultiplier = () => {
//       return this.#multiplier;
//     }
//   }


//   Calc.divider = 3;



//  const calc = new Calc("5", 7)
//     calc.sum().log().divide().log().multiply().log() ;
    
//   console.log(calc.getMultiplier())  
    
    
    
    //ci aspettiamo il colsole log di riga 44

  //la classe quando viene inizializzata mantiene in memoria il context 

  //Lezione 09/05 


  class Data {
    #_data;

    constructor(data) {
      const currentDate = new Date().getTime();
      
      this.#_data = {
        iat: currentDate,
        uat: currentDate,
        history: [{
          iat: currentDate,
          value: data,
        }],
        value: data,
      }
    }

    get data() {
      return this.#_data.value;
    }

    set data(value) {
      const currentDate = new Date().getTime();

      this.#_data.uat = currentDate;
      this.#_data.value = value;
      this.#_data.history.push({
        iat: currentDate,
        value: value,
      });
      
      return true;
    }

    printInfo = () => {
      console.log(JSON.stringify(this.#_data, null, 2));
    }

  }

  const storage = new Data("test");
  console.log(storage.data);

  storage.data = "test1";
  console.log(storage.data);


  storage.data = "test2";
  console.log(storage.data);


  storage.data = "test3";
  console.log(storage.data);


  storage.data = "test4";
  console.log(storage.data);

  storage.printInfo();



  
