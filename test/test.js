var expect = require('chai').expect;
var script = require('../exercise1.js');


describe('sum', function () {
    var test
    script.remoteMathService(function (err, answer) {
        if (err) console.log("error ", err);
        if (answer !== 3) {
            console.log("wrong answer", answer);
            test = answer
        } else {
            console.log("correct");
            test = answer
        }
    });

    it('check correct answer', function () {
        setTimeout(() => {
            expect(test).to.equal(3)
        }, 1500)
    })

})
