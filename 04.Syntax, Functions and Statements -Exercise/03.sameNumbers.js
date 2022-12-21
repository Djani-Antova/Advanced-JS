function sameNumbers(input) {

    let inputNumber = input.toString();
    let isSame = true;
    let sumOfDigits = 0;

    let digitToCompare = inputNumber[0];
    let numberL = inputNumber.length;

    for (let index = 0; index < numberL; index++) {        
       
        sumOfDigits += +inputNumber[index];

        if (inputNumber[index] !== digitToCompare) {
            isSame = false
        }
    }
    console.log((isSame));
    console.log(sumOfDigits);
}

sameNumbers(2222222)