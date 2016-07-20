var expect = require('chai').expect;

describe('One', () => {
    it('Should be equal to One', () => {
        expect(1).to.equal(1);
    });

    it('Should not be equal to Two', () => {
        expect(1).to.not.equal(2);
    });
});
