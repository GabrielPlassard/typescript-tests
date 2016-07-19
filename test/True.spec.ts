var expect = require('chai').expect;

describe('True', () => {
    it('Should be equal to True', () => {
        expect(true).to.equal(true);
    });

    it('Should not be equal to False', () => {
        expect(true).to.not.equal(false);
    });
});