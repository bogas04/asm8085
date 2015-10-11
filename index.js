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

var asm = {};

const iSet = require('./instructionSet');

/* Tells whether first word is a label or not */
asm.isLabel = firstWord => firstWord.endsWith(':');

/* Remove comments, anything starting with ; */
asm.decomment = code => code.replace(/(;.*)/g, '').trim();

/* Checks validity of code line based on instruction set*/
asm.isValidInstruction = codeLine => asm.sanitize(codeLine) in iSet;

/* Removes label from a given code line, if any */
asm.removeLabel = codeLine => codeLine.replace(/[a-zA-Z]+:/g, '').trim();

/* Converts a code line to formal instruction format as per Instruction Set */
asm.sanitize = codeLine => asm.labelToTag(asm.numberToTag(asm.removeLabel(codeLine))).trim();

/* Checks whether given instruction belongs to ones which have immediate data operand */
asm.isDataInstruction = codeLine => iSet.dataInstructions.indexOf(asm.getInstructionName(codeLine)) > -1;

/* Checks whether given instruction belongs to ones which have an address/label operand */
asm.isLabelInstruction = codeLine => iSet.labelInstructions.indexOf(asm.getInstructionName(codeLine)) > -1;

/* Converts a number to 'data' or 'address' tag which is used in formal instruction format */
asm.numberToTag = codeLine => {
  let operands = asm.getInstructionOperands(codeLine);
  if(operands.length > 0) {
    if(asm.isDataInstruction(codeLine)) {
      codeLine = codeLine.replace(operands[operands.length - 1], 'data');
    } else if(asm.isLabelInstruction(codeLine)) {
      codeLine = codeLine.replace(operands[operands.length - 1], 'address');
    }
  }
  return codeLine;
};

/* Converts a label to 'address' tag which is used in formal instruction format. 
 * TODO: labels can also point to data, say by using EQU */
asm.labelToTag = codeLine => asm.isLabelInstruction(codeLine) ? codeLine.replace(codeLine.split(' ').slice(-1), 'address') : codeLine;

/* Returns array of operands of an instruction */
asm.getInstructionOperands = codeLine => asm.removeLabel(codeLine).replace(asm.getInstructionName(codeLine), '').split(',').map(e => e.trim());

/* Returns the mnemonic of main instruction */
asm.getInstructionName = codeLine => { 
  let cs = codeLine.split(' ');
  return asm.isLabel(cs[0]) ? cs[1]: cs[0];
};

/* Returns the size (in bytes) of the instruction */
asm.getInstructionSize = codeLine => {
  if(!asm.isValidInstruction(codeLine)) {
    throw new Error('Instruction "' + codeLine + '" doesn\'t match to any instruction');
  }
  return iSet[asm.sanitize(codeLine)].size;
};

/* Assembles the given code into machine code */
asm.assemble = (code) => {
  let assembledCode = [];
  let codeLines = asm.decomment(code).split('\n').map(cl => cl.trim());

  codeLines.forEach((codeLine, index) => {
    let iName = asm.getInstructionName(codeLine);
    let iFormat = asm.sanitize(codeLine);
    switch(asm.getInstructionSize(codeLine)) {
      case 1: 
        assembledCode.push(iSet[iFormat].code);
        break;
      case 2:
        assembledCode.push(iSet[iFormat].code);
        assembledCode.push(codeLine.split(' ').slice(-1)[0]);
        break;
      case 3:
        assembledCode.push(iSet[iFormat].code);
        assembledCode.push(codeLine.split(' ').slice(-1)[0].slice(-2));
        assembledCode.push(codeLine.split(' ').slice(-1)[0].slice(-4, -2));
        break;
    }
  });

  return assembledCode.join('\n');
};

module.exports = asm;
