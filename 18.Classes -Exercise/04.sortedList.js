class List {
    constructor() {
        this.result = [];
        this.size = this.result.length;
    }
    add(el) {
        this.result.push(el);
        this.size = this.result.length;
        this.result.sort((a, b) => a - b)
    }
    remove(index) {
        if(index < 0 || index >= this.result) {
            throw new Error ("Invalid index")
        }
        this.result.splice(index, 1);
        this.size = this.result.length;
    }
    get(index) {
        if(index < 0 || index >= this.result) {
            throw new Error ("Invalid index")
        }
        return this.result[index];      

    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.result);

list.remove(0)
console.log(list.result);
//console.log(list.get(1));
