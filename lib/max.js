/**
 * Find max value.
 * @function max
 * @param {...number} values - Values to compare.
 * @returns {number} - Max number.
 */


"use strict";

/** @lends max */
function max() {
    var args = arguments;
    var result = undefined;
    for (var i = 0, len = args.length; i < len; i++) {
        var val = args[i];
        if (Array.isArray(val)) {
            val = max.apply(max, val);
        }
        var hit = (result === undefined) || (val > result);
        if (hit) {
            result = val;
        }
    }
    return result;
}

module.exports = max;

