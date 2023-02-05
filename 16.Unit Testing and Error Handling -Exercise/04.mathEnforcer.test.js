const mathEnforcer = require('./index.js');
const { assert } = require('chai');
const { addFive } = require('./index.js');


describe('Test the function of mathEnforcer', () => {

    describe('add five function test', () => {
        //Tests with incorrect input
        it('should return undefined with string', () => {
            assert(mathEnforcer.addFive('TEST') === undefined);
        });
        it('should return undefined with an array', () => {
            assert(mathEnforcer.addFive([]) === undefined);
        });
        it('should return undefined with an object', () => {
            assert(mathEnforcer.addFive({}) === undefined);
        });
        it('should return undefined with undefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined);
        });
        it('should return undefined with null', () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });
        //Test with correct input
        it('Positive integer number + 5', () => {
            assert(mathEnforcer.addFive(5) === 10)
        });
        it('Negative number + 5', () => {
            assert(mathEnforcer.addFive(-5) === 0)
        });
        it('Positive number + 5', () => {
            assert(mathEnforcer.addFive(5) === 10)
        });
        it('Decimal number + 5', () => {
            assert(mathEnforcer.addFive(5.6) === 10.6)
        });

    });

    describe('subtract ten function test', () => {
        //Tests with incorrect input
        it('should return undefined with string', () => {
            assert(mathEnforcer.subtractTen('TEST') === undefined);
        });
        it('should return undefined with an array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined);
        });
        it('should return undefined with an object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });
        it('should return undefined with undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });
        //Test with correct input
        it('Positive integer number -10', () => {
            assert(mathEnforcer.subtractTen(5) === -5)
        });
        it('Negative number -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15)
        });

        it('Decimal number -10', () => {
            assert(mathEnforcer.subtractTen(15.6) === 5.6)
        });


    });

    describe('sum function test', () => {
        //Test with correct input
        it('Two positive integer numbers', () => {
            assert(mathEnforcer.sum(10, 20) === 30)
        });
        it('Two negative  numbers', () => {
            assert(mathEnforcer.sum(-10, -2.5) === -12.5)
        });
        it('Two decimal  numbers', () => {
            assert(mathEnforcer.sum(10.5, 2.1) === 12.6)
        });
        it('First parameter string, second number', () => {
            assert(mathEnforcer.sum("", 20) === undefined)
        });
        it('First parameter number, second string,', () => {
            assert(mathEnforcer.sum(20, "") === undefined)
        });  


    });

});
