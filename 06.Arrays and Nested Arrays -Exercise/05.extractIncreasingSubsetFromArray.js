function extract(array) {

    let biggest = array.shift();
    let res = [biggest];

    for (const element of array) {
        if (element >= biggest) {
            res.push(element);
            biggest = element
        }
    }
    return res;

}

extract([20,
    3,
    2,
    15,
    6,
    1]

)
extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )