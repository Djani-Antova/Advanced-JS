function squareOfStars(input) {

    let stars = [];
    let res = [];
    const element = '*';

    for (let i = 0; i < input; i++) {        
        stars.push(element);
    }

    let newLine = stars.join(' ');     
  
    for (let i = 0; i < input; i++) {
        res.push(newLine)        
    }    
    
    for (const line of res) {
        console.log(line);
    }

}
squareOfStars(5)