#!/usr/bin/env node

/**
 * Build this project.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeCompiling = require('ape-compiling'),
    coz = require('coz');

apeTasking.runTasks('build', [
    function renderBud(callback) {
        coz.render([
            '.*.bud',
            'doc/**/.*.bud',
            'example/**/.*.bud',
            'lib/.*.bud',
            'test/.*.bud'
        ], callback);
    },
    function browsify(callback) {
        var src = require.resolve('../lib'),
            dest = require('../bower')['main'];
        apeCompiling.renderBrowserScript(src, dest, {
            as: 'numcal'
        }, callback);
    }
], true);
