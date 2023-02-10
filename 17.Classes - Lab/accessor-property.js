class Circle {

    #pi = Math.PI //private property - moje da se polzva samo ot constructor

    constructor(r) {
        this.radius = r;
        this.diameter = this.radius * 2
    }
    get area() {
        return this.#pi * (this.radius ** 2); // instead of Math.PI
    }
    get diameter() {
        return this.radius*2;
    }
    set diameter(value) {
        if(value < 0) {
            throw new Error('Diameter can not be less than 0')
        }
        this.radius = value / 2;
    }
   
}
let circle = new Circle(2);
console.log(circle.area);

circle.radius = 3;
console.log(circle.area);

circle.diameter = 10;
console.log(circle.area);
console.log(circle.radius);