function printEveryNthElement(array, step) {
    let res = []

    for (let index = 0; index < array.length; index+= step) {
        res.push(array[index]);        
    }
    return res
    
}

printEveryNthElement
(['dsa',
'asd', 
'test', 
'tset'], 
2
)
