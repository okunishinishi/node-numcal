/**
 * Test case for sum.
 * Runs with nodeunit.
 */

var sum = require('../lib/sum.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Sum'] = function (test) {
    test.equal(sum(3, 1, 4), 8);
    test.equal(sum([3, 1, 4]), 8);
    test.done();
};

