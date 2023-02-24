const { expect } = require('chai');
const flowerShop = require('./flowerShop.js');
 
describe('Object test', function () {
 
    describe('calcPriceOfFlowers', function () {
 
        it('Should throw error', function () {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).throw()
            expect(() => flowerShop.calcPriceOfFlowers('a', 'a', 1)).throw()
            expect(() => flowerShop.calcPriceOfFlowers('a', 1, 'a')).throw()
            expect(() => flowerShop.calcPriceOfFlowers(1, 'a', 'a')).throw()
            expect(() => flowerShop.calcPriceOfFlowers('a', 1.1, 1)).throw()
            expect(() => flowerShop.calcPriceOfFlowers('a', 1, 1.1)).throw()
            expect(() => flowerShop.calcPriceOfFlowers('a', 1.1, 1.1)).throw()
            expect(() => flowerShop.calcPriceOfFlowers('a', 1.1, 1.1)).throw()
        });
 
        it('Should be correct', function () {
            expect(flowerShop.calcPriceOfFlowers('Rose', 1, 1)).equal(`You need $1.00 to buy Rose!`)
            expect(flowerShop.calcPriceOfFlowers('Rose', 2, 1)).equal(`You need $2.00 to buy Rose!`)
            expect(flowerShop.calcPriceOfFlowers('Rose', 1, 0)).equal(`You need $0.00 to buy Rose!`)
            expect(flowerShop.calcPriceOfFlowers('Rose', 1, -1)).equal(`You need $-1.00 to buy Rose!`)
        });
        
    });
 
    describe('checkFlowersAvailable', function () {
 
        it('Should found flower', function () {
            expect(flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Tulip'])).equal(`The Rose are available!`)
            expect(flowerShop.checkFlowersAvailable('Rose', ['Tulip', 'Rose'])).equal(`The Rose are available!`)
        });
 
        it('Should not found flower', function () {
            expect(flowerShop.checkFlowersAvailable('Rose', ['Orchid', 'Tulip'])).equal(`The Rose are sold! You need to purchase more!`)
            expect(flowerShop.checkFlowersAvailable('Rose', [])).equal(`The Rose are sold! You need to purchase more!`)
        });
 
    });
 
    describe('sellFlowers', function () {
        it('Should throw error', function () {
            expect(() => flowerShop.sellFlowers('a' ,1)).throw()
            expect(() => flowerShop.sellFlowers(1 ,1)).throw()
            expect(() => flowerShop.sellFlowers([] ,'a')).throw()
            expect(() => flowerShop.sellFlowers([] ,1.1)).throw()
            expect(() => flowerShop.sellFlowers([] ,-1)).throw()
            expect(() => flowerShop.sellFlowers([] ,-1.1)).throw()
            expect(() => flowerShop.sellFlowers([] ,0)).throw()
            expect(() => flowerShop.sellFlowers([] ,1)).throw()
            expect(() => flowerShop.sellFlowers(['Rose'] ,1)).throw()
            expect(() => flowerShop.sellFlowers(['Rose'] ,2)).throw()
        });
 
        it('Should throw error', function () {
            expect(flowerShop.sellFlowers(['Rose'], 0)).equal('')
            expect(flowerShop.sellFlowers(['Rose', 'Tulip'], 0)).equal('Tulip')
            expect(flowerShop.sellFlowers(['Rose', 'Tulip'], 1)).equal('Rose')
            expect(flowerShop.sellFlowers(['Rose', 'Tulip', 'Orchid'], 0)).equal('Tulip / Orchid')
            expect(flowerShop.sellFlowers(['Rose', 'Tulip', 'Orchid'], 1)).equal('Rose / Orchid')
        });
    });
 
});