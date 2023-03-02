const carService = require('./car');
const { expect } = require('chai')

describe('carService', function () {

    describe('isItExpensive', function () {

        it('Should be correct', function () {
            expect(carService.isItExpensive("Engine")).equal(`The issue with the car is more severe and it will cost more money`)
        });
        it('Should be correct', function () {
            expect(carService.isItExpensive("Transmission")).equal(`The issue with the car is more severe and it will cost more money`)
        });
        it('Should be correct', function () {
            expect(carService.isItExpensive("a")).equal(`The overall price will be a bit cheaper`)
        });
    });


    describe('discount', function () {
        it('Should throw error', function () {
            expect(() => carService.discount('a', 1,)).throw()
            expect(() => carService.discount(1, 'a',)).throw()
            expect(() => carService.discount('a', 'a')).throw()
        });
        it('Should be correct', function () {
            expect(carService.discount(2, 5)).equal("You cannot apply a discount")
        });
        it('Should be correct', function () {
            expect(carService.discount(3, 5)).equal('Discount applied! You saved 0.75$')
        });
        it('Should be correct', function () {
            expect(carService.discount(8, 5)).equal('Discount applied! You saved 1.5$')
        });

    })

    describe('partsToBuy ', function () {
        it('Should throw error', function () {
            expect(() => carService.partsToBuy('a', [],)).throw()
            expect(() => carService.partsToBuy([], 'a',)).throw()
            expect(() => carService.partsToBuy('a', 'a')).throw()
        });

        const parts = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
        const partNames = ["blowoff valve", "injectors"];      
        it('Should be correct', function () {
            expect(carService.partsToBuy([], ['a', 'b'])).equal(0)
        });
        it('Should be correct', function () {
            expect(carService.partsToBuy(parts, partNames)).to.equal(145);
        });
    })
})
