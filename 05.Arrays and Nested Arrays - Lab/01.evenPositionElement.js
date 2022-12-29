function evenPositionElement(input) {
    let res = []
    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        if (i % 2 == 0) {
            res.push(element)
        }

    }
    console.log(res.join(' '));

}
evenPositionElement(['20', '30', '40', '50', '60'])