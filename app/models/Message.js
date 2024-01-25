class Message{
    #message1;
   

constructor(message1){
 this.message1 = message1
}

set message1(value){
    if (typeof value !== 'string' || value.length === 0){
        throw new Error('message invalide');
    }
    this.#message1 = value;
}
get message1() {
    return this.#message1.toLowerCase();
  }

  get profil() {
    return `${this.message1}`;
  }

}
export default Message



