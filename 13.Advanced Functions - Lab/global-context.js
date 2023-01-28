//Global context:
function random() {
    console.log(this); //in browser it will be window
}
random();       //global invocation;


//Method invocation;
let math = {
    random: random
}
math.random()

//Object context
const obj = {
    name: 'Peter',
    greed() {
        console.log(this); // Object {name: "Peter"}

    }
}
obj.greed() // method invocation
let greed = obj.greed; //copy function by reference
greed() // global invocation

//Nested functions
function a() {
    function b() {
        function c() {
            function d() {
                console.log(this);
            }
            d()
        }
        c()
    }
    b()
}
a()

