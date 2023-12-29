import chai from 'chai';
const expect = chai.expect;

describe('Simple Test Suite', () => {
  it('True should be true', () => {
    expect(true).to.be.true;
  });

  // Flaky test
  it('Flaky Test', () => {
    expect(Math.random() < 0.5).to.be.true; // This test will fail about 50% of the time
  });
});

