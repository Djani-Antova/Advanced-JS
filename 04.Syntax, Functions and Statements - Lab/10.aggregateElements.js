function aggregteElements(array) {

    let sum = function (array) {
        let sum = 0;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            sum += element
        }        
        return sum
    }
    let inverseSumum = function (array) {
        let sum = 0;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            sum += 1/element
        }        
        return sum
    }
    let concat = function (array) {
        let sum = '';
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            sum += element
        }        
        return sum
    }

    console.log(sum(array));
    console.log(inverseSumum(array));
    console.log(concat(array));
}
//aggregteElements([1, 2, 3])
aggregteElements([2, 4, 8, 16])