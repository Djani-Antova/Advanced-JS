function gcd(a, b) {
    let firstNumber = Number(a);
    let secondNumber = Number(b);

    while(firstNumber !== secondNumber) {
        if (firstNumber > secondNumber) {
            //15 > 5
            //15 - 5 = 10
            firstNumber -= secondNumber; 
        } else {
            //5
            secondNumber -= firstNumber
        }
    }
    console.log(firstNumber);    
}

gcd(15, 5)