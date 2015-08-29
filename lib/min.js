/**
 * Find min value.
 * @function min
 * @param {...number} values - Values to compare.
 * @returns {number} - Min number.
 */


"use strict";

/** @lends min */
function min() {
    var args = arguments;
    var result = undefined;
    for (var i = 0, len = args.length; i < len; i++) {
        var val = args[i];
        if (Array.isArray(val)) {
            val = min.apply(min, val);
        }
        var hit = (result === undefined) || (val < result);
        if (hit) {
            result = val;
        }
    }
    return result;
}

module.exports = min;

