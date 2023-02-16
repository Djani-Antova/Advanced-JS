const motorcycleRider = require('./Motorcycle Rider.js');
 
describe('motorcycleRider Tests', function () {
 
    describe('licenseRestriction', function () {
 
        it('Should be correct, when category is AM', function () {
            expect(motorcycleRider.licenseRestriction('AM')).equal(
                'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });
 
        it('Should be correct, when category is A1', function () {
            expect(motorcycleRider.licenseRestriction('A1')).equal(
                'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });
 
        it('Should be correct, when category is A2', function () {
            expect(motorcycleRider.licenseRestriction('A2')).equal(
                'Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });
 
        it('Should be correct, when category is A', function () {
            expect(motorcycleRider.licenseRestriction('A')).equal(
                'No motorcycle restrictions, and the minimum age is 24.');
        });
 
        it('Should throw error, when category is invalid', function () {
            expect(() => motorcycleRider.licenseRestriction('B')).throw();
            // expect(() => motorcycleRider.licenseRestriction(1)).throw();
            // expect(() => motorcycleRider.licenseRestriction(null)).throw();
            // expect(() => motorcycleRider.licenseRestriction(true)).throw();
        });
    });
 
    describe('motorcycleShowroom', function () {
        it('Should throw error, when engineVolume is not array', function () {
            expect(() => motorcycleRider.motorcycleShowroom(1, 1)).throw();
        });
        it('Should throw error, when maximumEngineVolume is not number', function () {
            expect(() => motorcycleRider.motorcycleShowroom([1], '1')).throw();
        });
        it('Should throw error, when engineVolume length is bigger than 1', function () {
            expect(() => motorcycleRider.motorcycleShowroom([1, 2], 1)).throw();
        });
        // it("Should throw error, when engineVolume is empty array", function() {
        //     expect(() => motorcycleRider.motorcycleShowroom([], 1)).throw();
        // });
        it('Should throw error, when maximumEngineVolume is lower than 50', function () {
            expect(() => motorcycleRider.motorcycleShowroom([1], 49)).throw();
        });
 
        it('Should be correct', function () {
            expect(motorcycleRider.motorcycleShowroom([50], 51)).equal(
                `There are 1 available motorcycles matching your criteria!`);
        });
        it('Should be correct', function () {
            expect(motorcycleRider.motorcycleShowroom([50], 50)).equal(
                `There are 1 available motorcycles matching your criteria!`);
        });
        it('Should be correct', function () {
            expect(motorcycleRider.motorcycleShowroom([50, 51], 52)).equal(
                `There are 2 available motorcycles matching your criteria!`);
        });
        it('Should be correct', function () {
            expect(motorcycleRider.motorcycleShowroom([50, 51], 51)).equal(
                `There are 2 available motorcycles matching your criteria!`);
        });
    });
 
    describe('otherSpendings', function () {
        it('Should throw error, when equipment is not array', function () {
            expect(() => motorcycleRider.otherSpendings(1, [1], true)).throw();
        });
        it('Should throw error, when consumables is not array', function () {
            expect(() => motorcycleRider.otherSpendings([1], 1, true)).throw();
        });
        it('Should throw error, when discount is not boolean', function () {
            expect(() => motorcycleRider.otherSpendings([1], [1], 1)).throw();
        });
 
        it('Should be correct', function () {
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true)).equal(
                `You spend $243.00 for equipment and consumables with 10% discount!`);
        });
        it('Should be correct', function () {
            expect(motorcycleRider.otherSpendings(['gloves'], ['engine oil'], true)).equal(
                `You spend $63.00 for equipment and consumables with 10% discount!`);
        });
        it('Should be correct', function () {
            expect(motorcycleRider.otherSpendings(['helmet'], ['gloves'], true)).equal(
                `You spend $180.00 for equipment and consumables with 10% discount!`);
        });
        // it("Should be correct", function() {
        //     expect(motorcycleRider.otherSpendings(['gloves'],['gloves'],true)).equal(`You spend $0.00 for equipment and consumables with 10% discount!`)
        // });
 
        it('Should be correct', function () {
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)).equal(
                `You spend $270.00 for equipment and consumables!`);
        });
        it('Should be correct', function () {
            expect(motorcycleRider.otherSpendings(['gloves'], ['engine oil'], false)).equal(
                `You spend $70.00 for equipment and consumables!`);
        });
        it('Should be correct', function () {
            expect(motorcycleRider.otherSpendings(['helmet'], ['gloves'], false)).equal(
                `You spend $200.00 for equipment and consumables!`);
        });
        // it("Should be correct", function() {
        //     expect(motorcycleRider.otherSpendings(['gloves'],['gloves'],false)).equal(
            // `You spend $0.00 for equipment and consumables!`)
        // });
    });
});
