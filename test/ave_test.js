/**
 * Test case for ave.
 * Runs with mocha.
 */
"use strict";

const ave = require('../lib/ave.js'),
    assert = require('assert');

it('Ave', (done) => {
    assert.equal(ave(1, 4, 4), 3);
    assert.equal(ave([1, 4, 4]), 3);
    done();
});

