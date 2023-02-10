
//First example
class Cat {
    isHungry = true; // this is a default property; without let;

    constructor(name) {
        this.name = name;
        this.isHoundry = true; // syntax for a default property
         
    }
    makeSound() {
        console.log(`${this.name} says Meaw`);
    }
}

let firstCat = new Cat('Navcho', );
firstCat.makeSound()

let secondCat = new Cat('Mishi', );
console.log(secondCat);

//Second example

let catNames = ["Navcho", 'Gary', 'Zuzi', 'Mishy', 'Sisa'];
let cats = catNames.map(x => new Cat(x));
console.log(cats[3]);
cats.forEach( x => x.makeSound())

// instanceof

console.log(firstCat instanceof Cat);

class Dog {

}
let firstDog = new Dog;
console.log(firstDog instanceof Cat);


