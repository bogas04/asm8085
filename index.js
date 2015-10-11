'use strict';

/* Phases:
 * Decomment
 * First pass: 
 *   - Bloat each statement into hex bytes
 *   - Assign addresses to each line keeping their number of bytes in mind.
 *   - Perform some directives
 * Second pass: 
 *   - Replace labels with actual address
 */

const iSet = require('./instructionSet');

var asm = {};

asm.isLabel = firstWord => firstWord.endsWith(':');

asm.decomment = code => code.replace(/(;.*)/g, '').trim();

asm.isValidInstruction = codeLine => asm.sanitize(codeLine) in iSet;

asm.removeLabel = codeLine => codeLine.replace(/[a-zA-Z]+:/g, '').trim();

/* Converts a code line to formal instruction format as per Instruction Set */
asm.sanitize = (codeLine) => asm.labelToTag(asm.numberToTag(asm.removeLabel(codeLine))).trim();

asm.isDataInstruction = codeLine => iSet.dataInstructions.indexOf(asm.getInstructionName(codeLine)) > -1;

asm.isLabelInstruction = codeLine => iSet.labelInstructions.indexOf(asm.getInstructionName(codeLine)) > -1;

/* Converts a number to 'data' or 'address' tag which is used in formal instruction format */
asm.numberToTag = codeLine => codeLine.replace(/[0-9]+/g, asm.isDataInstruction(codeLine) ? 'data' : 'address');

/* Converts a label to 'address' tag which is used in formal instruction format. 
 * TODO: labels can also point to data, say by using EQU */
asm.labelToTag = codeLine => asm.isLabelInstruction(codeLine) ? codeLine.replace(codeLine.split(' ').slice(-1), 'address') : codeLine;

asm.getInstructionName = codeLine => { 
  let cs = codeLine.split(' ');
  return asm.isLabel(cs[0]) ? cs[1]: cs[0];
};

asm.getInstructionSize = codeLine => {
  if(!asm.isValidInstruction(codeLine)) {
    throw new Error('Instruction "' + codeLine + '" doesn\'t match to any instruction');
  }
  return iSet[asm.sanitize(codeLine)].size;
};

asm.assemble = (code) => {
  let assembledCode = '';
  let codeLines = asm.decomment(code).split('\n').map(cl => cl.trim());
  codeLines.forEach((value, index) => {

  });
};

module.exports = asm;
