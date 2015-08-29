/**
 * Test case for ave.
 * Runs with nodeunit.
 */

var ave = require('../lib/ave.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Ave'] = function (test) {
    test.equal(ave(1, 4, 4), 3);
    test.equal(ave([1, 4, 4]), 3);
    test.done();
};

