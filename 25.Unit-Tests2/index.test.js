const findNewApartment = require('./index');
const { expect } = require('chai')

describe('findNewApartment', () => {

    describe('isGoodLocation', () => {
        it('Should throw error', () => {
            expect(() => findNewApartment.isGoodLocation([], Boolean)).throw()
            expect(() => findNewApartment.isGoodLocation('a', 1)).throw()
            expect(() => findNewApartment.isGoodLocation('a', [])).throw()
        });

        it('Should throw error', () => {
            expect(findNewApartment.isGoodLocation('a', true)).equal("This location is not suitable for you.")
        });
        it('Should throw error', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).equal("There is no public transport in area.")
        });
        it('Should throw error', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).equal("You can go on home tour!")
        });


    });

    describe('isLargeEnough', () => {
        it('Should throw error', () => {
            expect(() => findNewApartment.isLargeEnough('a', 10)).throw()
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], 'a')).throw()
            expect(() => findNewApartment.isLargeEnough([], 10)).throw()
            expect(() => findNewApartment.isLargeEnough([], 0)).throw()
        });
        it('Should be ok', () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 10)).equal('40, 50, 60')
        });


    });
    describe('isItAffordable', () => {
        it('Should throw error', () => {
            expect(() => findNewApartment.isItAffordable('a', 10)).throw()
            expect(() => findNewApartment.isItAffordable(10, 'a')).throw()
            expect(() => findNewApartment.isItAffordable('a', [])).throw()
            expect(() => findNewApartment.isItAffordable(0, 10)).throw()
            expect(() => findNewApartment.isItAffordable(-1, 10)).throw()
            expect(() => findNewApartment.isItAffordable(10, 0)).throw()
            expect(() => findNewApartment.isItAffordable(10, - 10)).throw()

        });
        it('Should be ok', () => {
            expect(findNewApartment.isItAffordable(10, 50)).equal("You can afford this home!")
            expect(findNewApartment.isItAffordable(50, 50)).equal("You can afford this home!")
            expect(findNewApartment.isItAffordable(100, 50)).equal("You don't have enough money for this house!")
        });

    });

});








