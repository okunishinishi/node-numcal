/**
 * Test case for max.
 * Runs with nodeunit.
 */

var max = require('../lib/max.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Max'] = function(test){
    test.equal(max(), undefined);
    test.equal(max(0), 0);
    test.equal(max(3, 2, 4), 4);
    test.equal(max([3, 2, 4]), 4);
    test.done();
};

