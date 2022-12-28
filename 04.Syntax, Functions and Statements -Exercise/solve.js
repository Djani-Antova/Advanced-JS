
function wordsUppercase(text) {

   
    let words = text.match(new RegExp(/\w+/g))
    if(words !== null) {
        words = words.join(", ").toUpperCase();
        console.log(words);
    } 
   
}
wordsUppercase('hello')
wordsUppercase('Functions in JS can be nested, i.e. hold other functions')
wordsUppercase('@ $ %')

