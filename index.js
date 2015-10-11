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

/* Assembles the given code into machine code */
asm.assemble = (code) => {
  let assembledCode = [];
  let labels = {};
  let codeLines = asm.decomment(code).split('\n').map(cl => cl.trim());
  let startWith = 0;

  /* Get all labels in labels obj */
  codeLines.reduce((startWith, codeLine) => {
    if(asm.isLabel(codeLine.split(' ')[0])) {
      let label = codeLine.split(' ')[0].slice(0, -1);
      let hex = startWith.toString(16).toUpperCase();
      labels[label] = hex.length !== 4 ? ("000".concat(hex).slice(-4)): hex;
    }
    return (startWith += asm.getInstructionSize(codeLine));
  }, startWith);

  /* Expand mnemonics, replace label tags with actual line number */
  codeLines.forEach((codeLine, index) => {
    let iName = asm.getInstructionName(codeLine);
    let iFormat = asm.sanitize(codeLine);
    let operands = asm.getInstructionOperands(codeLine);
    let lastOperand = operands[operands.length - 1];

    assembledCode.push(iSet[iFormat].code);

    switch(asm.getInstructionSize(codeLine)) {
      case 2:
        assembledCode.push(iSet[iFormat].code);
        assembledCode.push(lastOperand);
        break;
      case 3:
        if(asm.isLabelInstruction(codeLine) && lastOperand in labels) {
          assembledCode.push(labels[lastOperand].slice(-2));
          assembledCode.push(labels[lastOperand].slice(-4, -2));
        } else {
          assembledCode.push(lastOperand.slice(-2));
          assembledCode.push(lastOperand.slice(-4, -2));
        }
        break;
    }
  });

  return assembledCode.join('\n');
};

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

/* Converts a label to 'address' tag which is used in formal instruction format. 
 * TODO: labels can also point to data, say by using EQU */
asm.labelToTag = codeLine => asm.isLabelInstruction(codeLine) ? codeLine.replace(codeLine.split(' ').slice(-1), 'address') : codeLine;

/* Returns array of operands of an instruction */
asm.getInstructionOperands = codeLine => asm.removeLabel(codeLine).replace(asm.getInstructionName(codeLine), '').split(',').map(e => e.trim());

module.exports = asm;
