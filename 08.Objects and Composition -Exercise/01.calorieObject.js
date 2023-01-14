function calorieObject(array) {
    let res = {}
    for (let i = 0; i < array.length - 1; i+=2) {
        const food = array[i];
        const calorie = Number(array[ i+ 1])
        res[food] = calorie;        
    }
    console.log(res);    
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])