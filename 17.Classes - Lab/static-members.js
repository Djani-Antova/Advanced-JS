class Cat {
    static legNumber = 4; //static property
    isHungry = true; // this is a default property; without let;

    constructor(name) {
        this.name = name;
        //this.isHungry = true; // syntax for a default property
         
    }
    makeSound() {
        console.log(`${this.name} says Meaw`);
    }
    static vetCheck(cat) {
        if(cat.isHungry) {
            console.log('this cat should be fed');
        }else {
            console.log('This cat is fine');
        }
    }
}

let cat = new Cat('Navcho');
cat.makeSound();
Cat.vetCheck(cat);
console.log(Cat.legNumber);