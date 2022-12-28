function wordsUppercase(string) {

    let pattern = /[A-Za-z]{1,}/g;

    let match = string.match(pattern);
    
    let res = [];
    if(match !== null) {
        for (const el of match) {
            let elToUppercase = el.toUpperCase()
            res.push(elToUppercase)
        }
        console.log(res.join(', '));
    }
   
}
//wordsUppercase('hello')
//wordsUppercase('Functions in JS can be nested, i.e. hold other functions')
wordsUppercase('@ $ %')