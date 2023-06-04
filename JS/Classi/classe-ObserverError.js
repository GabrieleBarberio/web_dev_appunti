class ObserverError extends Error{
    constructor(message, code){
        super(`${code} -> ${message}`);
        this.name = "[ObserverError]";
    }
}

class Observer {
    #events = {};
    constructor(){
        this.namespace = null;
    };

    on = ( name, callback) => {
        if( typeof name !== "String") {
            throw new ObserverError("name must be a valid string", 1001);}
        if( typeof callback !== "String") {
            throw new ObserverError("callback must be a valid function", 1001);}
        if( !this.namespace ){
            throw new ObserverError("You must specify a namespace", 1001);}
            
            this.#events[this.namespace].push({ name , callback });
            this.namespace = null;

    
    };

    in = (namespace) => {
        if( typeof namespace !== "String")
         throw new ObserverError("namespace must be a valid string", 1001);
         this.namespace = namespace;
         if( this.#events.hasOwnProperty(namespace)){
            this.#events[namespace] = [];
         }
         return this;

    }

    emit = (name, ...args) => {
        if( typeof name !== "String") {
            throw new ObserverError("name must be a valid string", 1001);}

        const _events = this.#event[this.namespace].filter( item => item.name === name)

        if( _events.length > 0 )
    }

}