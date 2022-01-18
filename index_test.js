var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('tests if 5! is equal to 120',()=>{
      //Setup
      const expected = 120;
      const inputNumber = 5;

      //Exercise
      const actual = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(actual,expected);
      
    })
    it('tests if 3! is equal to 6',()=>{
      //Setup
      const expected = 6;
      const inputNumber = 3;

      //Exercise
      const actual = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(actual,expected);
      
    })
    it('returns correct value of 0!',()=>{

   //Setup
      const expected = 1;
      const inputNumber = 0;

      //Exercise
      const actual = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(actual,expected);

    })
  });
});