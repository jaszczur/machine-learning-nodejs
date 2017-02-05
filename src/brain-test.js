import chai from 'chai';
const should = chai.should();

import {Brain, BrainFactory} from './brain';

describe("Brain", () => {
  let cut = new BrainFactory(3, 2).create_brain();

  it("should exist", () => {
    should.exist(cut);
  });

  describe("initialize", () => {
    it("should create network", () => {
      cut.layers.length.should.equal(3);
    });
  });
});
