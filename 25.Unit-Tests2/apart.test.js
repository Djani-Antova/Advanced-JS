const findNewApartment = require('./car');
const { expect } = require('chai')

describe('findNewApartment', () => {

    describe('isGoodLocation', () => {
        it('Should throw error', () => {
            expect(() => findNewApartment.isGoodLocation([], Boolean)).throw()
            expect(() => findNewApartment.isGoodLocation('a', 1)).throw()
        });

    });

    describe('isLargeEnough', () => {

    });
    describe('isItAffordable', () => {

    });



    // describe('sellFlowers', function () {
    //     it('Should throw error', function () {
    //         expect(() => flowerShop.sellFlowers('a' ,1)).throw()
    //         expect(() => flowerShop.sellFlowers(1 ,1)).throw()
    //         expect(() => flowerShop.sellFlowers([] ,'a')).throw()
    //     });

    //     it('Should throw error', function () {
    //         expect(flowerShop.sellFlowers(['Rose'], 0)).equal('')
    //         expect(flowerShop.sellFlowers(['Rose', 'Tulip'], 0)).equal('Tulip')
    //     });
    // });



});

