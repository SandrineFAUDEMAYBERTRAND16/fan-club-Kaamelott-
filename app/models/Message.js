class Message {
    #value;

    constructor(value) {
        this.value = value;
    }

    get value() {
        return this.#value;
    }
    set value(value){ //set pour setter
        if(!message) {
            throw new Error('Le message ne peut être vide')
          }
          else if (value.length < 3) {
            throw new Error('Le message doit faire au moins 3 caractères')
          }
          else if (value.length > 500) {
            throw new Error('Le message ne peut faire plus de 500 caractères')
          }
        this.#value = value;
    }
}

export default Message;



