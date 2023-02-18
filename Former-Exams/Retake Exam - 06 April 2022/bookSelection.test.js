const bookSelection = require('./bookSelection');
const { expect } = require('chai')

describe('', () => {

    describe('isGenreSuitable', () => {
        it('should be unsuitable for under 12', () => {
            expect(bookSelection.isGenreSuitable("Thriller", 11)).equal(`Books with Thriller genre are not suitable for kids at 11 age`)
        });
        it('should be unsuitable for under 12', () => {
            expect(bookSelection.isGenreSuitable("Horror", 12)).equal(`Books with Horror genre are not suitable for kids at 12 age`)
        });
        it('should be suitable for over 12', () => {
            expect(bookSelection.isGenreSuitable("Horror", 13)).equal(`Those books are suitable`)
        });
        it('should be suitable for over 12', () => {
            expect(bookSelection.isGenreSuitable("Thriller", 13)).equal(`Those books are suitable`)
        });

    });

    describe('isItAffordable', () => {
        it('checkes if price is number', () => { // see also negative numbers - no need!
            expect(() => bookSelection.isItAffordable('B', 50)).throw();
        });
        it('checkes if budget is number', () => {
            expect(() => bookSelection.isItAffordable(50, 'B')).throw();
        });
        it('checkes if budget is sufficient', () => {
            expect(bookSelection.isItAffordable(50, 20)).equal(
                `You don't have enough money`);
        });
        it('checkes if budget is sufficient', function () {
            expect(bookSelection.isItAffordable(50, 120)).equal(
                `Book bought. You have 70$ left`);
        });

    });

    describe('suitableTitles', () => {
        it('checkes valid input', () => {
            expect(() => bookSelection.suitableTitles('B', 'b')).throw();            
        });
        it('checkes valid input', () => {
            expect(() => bookSelection.suitableTitles([], 1)).throw();            
        });
        it('checkes result', () => {
            let input = [
                { title: "The Da Vinci Code", genre: "Thriller" },
                { title: "The Da Vinci Code1", genre: "Thriller" },
                { title: "The Da Vinci Code2", genre: "Thriller" }  
            ]
            let result = ["The Da Vinci Code", "The Da Vinci Code1", "The Da Vinci Code2"]
            expect(bookSelection.suitableTitles(input, 'Thriller').join(' ')).equal(result.join(' '));            
        });
    });

});


