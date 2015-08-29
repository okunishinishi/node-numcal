/**
 * Test case for min.
 * Runs with nodeunit.
 */

var min = require('../lib/min.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Min'] = function (test) {
    test.equal(min(), undefined);
    test.equal(min(0), 0);
    test.equal(min(3, 2, 4), 2);
    test.equal(min([3, 2, 4]), 2);
    test.done();
};

