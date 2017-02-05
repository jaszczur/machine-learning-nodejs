import chai from 'chai';
const should = chai.should();

import Brain from './brain';

describe("Brain", () => {
    it("should work", () => {
        let b = new Brain();
        should.exist(b);
    });
});
