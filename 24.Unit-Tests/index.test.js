const lookupChar = require('./index.js');
const { expect } = require('chai');

describe('Test lookupChar function', () => {

    describe('Test lookupChar with incorrect input', () => {
        it('Result with number as first param', () => {
            expect(lookupChar(1, 1)).equal(undefined)
        });
        // it('Result with array, as first param', () => {
        //     expect(lookupChar([], 1)).equal(undefined)
        // });
        // it('Result with object as first param', () => {
        //     expect(lookupChar({}, 1)).equal(undefined)
        // });
       
        it('Result with string as second param', () => {
            expect(lookupChar('Lora', "boy")).equal(undefined)
        });
        // it('Result with array as second param', () => {
        //     expect(lookupChar('Lora', [])).equal(undefined)
        // });
        // it('Result with object as second param', () => {
        //     expect(lookupChar('Lora', {})).equal(undefined)
        // });
        // it('Result with boolean as second param', () => {
        //     expect(lookupChar('Lora', true)).equal(undefined)
        // });   
        it('Result with decimal as second param', () => {
            expect(lookupChar('Lora', 2.1)).equal(undefined)
        }); 

    
    });
    describe('Test lookupChar with correct input', () => {
        it('Result with index negative', () => {
            expect(lookupChar('Lora', -1)).equal('Incorrect index')
        }); 
        it('Result with index bigger', () => {
            expect(lookupChar('Lora', 5)).equal('Incorrect index')
        }); 
        it('Result with index equal', () => {
            expect(lookupChar('Lora', 4)).equal('Incorrect index')
        }); 
        it('Result with correct index', () => {
            expect(lookupChar('Lora', 3)).equal('a')
        });   
    });
});





