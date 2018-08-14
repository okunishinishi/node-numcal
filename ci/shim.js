#!/usr/bin/env node

/**
 * Compile to shim source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const ababel = require('ababel')

apeTasking.runTasks('shim', [
  () => ababel('**/*.js', {
    cwd: 'lib',
    out: 'shim/browser'
  })
], true)
