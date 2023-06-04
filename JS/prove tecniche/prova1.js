class MyArray extends Array {
    constructor (customName, ...rest){
            super(...rest)
            this.customName = customName;
    }

    sum(){
       return this.reduce((a,b) => { return a + b })
    }
}

let arr = new MyArray("PrimoArray", 3, 4 , 8, 13, 4, 7, 9, 12, 5);

console.log(arr.sum())