import addToDom from './add_to_dom';

class Person {
    constructor(name){
        this.name = name;
    }

    talk(msg){
        addToDom('h1', `${this.name} says: ${msg}`);
    }

    greet(){
        this.talk(`Hi my name is ${this.name}`);
    }
}

class SuperPerson extends Person{
    constructor(name, power){
        super(name);
        this.power = power;
    }

    saySuperPower(){
        this.talk(`My super power is ${this.power}`);
    }
}

export default SuperPerson;