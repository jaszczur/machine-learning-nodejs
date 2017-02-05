import chai from 'chai';
const should = chai.should();

import {Brain, BrainFactory} from './brain';

describe("Brain", () => {
  let cut = new BrainFactory(3, 2).create_brain();

  it("should exist", () => {
    should.exist(cut);
  });

  describe("initialize", () => {
    it("should create number of layers", () => {
      cut.layers.length.should.equal(3);
    });

    it("should create proper number of neurons in each layer", () => {
      cut.layers[0].length.should.equal(3);
      cut.layers[1].length.should.equal(3);
      cut.layers[2].length.should.equal(2);
    });
  });

  describe("compute", () => {
    it("should work", () => {
      let result = cut.compute([0.1, 1, 0.5]);
      console.log(`Result: ${result}`);
    });
  });
});
