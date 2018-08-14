/**
 * Basic numeric calculation functions.
 * @module numcal
 */

'use strict'

const d = (module) => module && module.default || module

const ave = d(require('./ave'))
const max = d(require('./max'))
const min = d(require('./min'))
const sum = d(require('./sum'))

module.exports = {
  ave,
  max,
  min,
  sum
}
