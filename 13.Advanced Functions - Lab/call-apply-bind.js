//Call and apply

function introduce(firsName, secondName) {
    console.log(`Hello ${firsName} ${secondName}, my name is ${this.name}`);
}
introduce("Gosho", 'Ivanov') // flobal invocation

let person = {
    name: "Pesho",
}
introduce.call(person, "Gosho", 'Ivanov')       //invoke using call
introduce.apply(person, ["Stamat", 'Stamatov'])    //invoke using apply

//Bind
let superHuman = {
    name: 'Superman'
}

let superIntroduction = introduce.bind(superHuman, 'Louise', 'Lane');
superIntroduction()
