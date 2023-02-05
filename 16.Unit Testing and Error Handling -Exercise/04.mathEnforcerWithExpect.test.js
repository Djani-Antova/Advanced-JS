describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined ', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
            expect(mathEnforcer.addFive({})).to.equal(undefined);
            expect(mathEnforcer.addFive([])).to.equal(undefined);
        });

        it('should return the result ', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(2.5)).to.be.closeTo(7.5, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined r', () => {
            expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
        });

        it('should return the result ', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
            expect(mathEnforcer.subtractTen(12.5)).to.be.closeTo(2.5, 0.01);
        });
    });

    describe('sum', () => {
        it('should return undefined if ..', () => {
            expect(mathEnforcer.sum('5', 5)).to.equal(undefined);
            expect(mathEnforcer.sum(5, {})).to.equal(undefined);
            expect(mathEnforcer.sum([], 5)).to.equal(undefined);
        });

        it('should return the result ', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
            expect(mathEnforcer.sum(-5, 5)).to.equal(0);
            expect(mathEnforcer.sum(2.5, 5)).to.be.closeTo(7.5, 0.01);
        });
    });
});
