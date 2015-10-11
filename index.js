'use strict';

/* Phases:
 * Decomment
 * First pass: 
 *   - Assign addresses to each line keeping their number of bytes in mind.
 *   - Perform some directives
 * Second pass: 
 *   - Bloat each statement into hex bytes
 *   - Replace labels with actual address
 */

var asm = {
  decomment: function(code) {
    return code.replace(/(;.*)/g, '');
  },
  assemble: function (code) {
    var assembledCode = '';
    var codeLines = asm.decomment(code).split('\n');
  }
};

module.exports = asm;
