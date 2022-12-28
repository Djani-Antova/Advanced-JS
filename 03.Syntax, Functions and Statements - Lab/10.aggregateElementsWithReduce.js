function aggregateElements(array) {

    function sum(array) {
        return array.reduce((acc, val) => acc + val, 0)
    }

    function inverse(array) {
        return array.reduce((acc, val) => acc + 1/val, 0)
    }

    function concat(array) {
        return array.reduce((acc, val) => String(acc) + String(val), )
    }

    console.log(sum(array));
    console.log(inverse(array));
    console.log(concat(array));
}
aggregateElements([2, 4, 8, 16])