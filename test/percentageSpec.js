var assert = require('assert');
var Percentage = require('../lib/Percentage');
describe("percentage",()=>{
    describe("#evolution",()=>{
        it('should give an evolution',()=>{
            assert.equal(Percentage.evolution(100,200),100)
            assert.equal(Percentage.evolution(100,150),50)
            assert.equal(Percentage.evolution(100,50),-50)
        })
    })
})