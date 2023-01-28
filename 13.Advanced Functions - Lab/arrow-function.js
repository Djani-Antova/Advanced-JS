const person = {
    firsName: "Pesho",
    lastName: 'Georgiev',
    introduce() {
        const getFullname = function () {
            return this.firsName + ' ' + this.lastName
        }
        console.log(`Hello, my name is ${getFullname()}`);
    }
}

person.introduce();
