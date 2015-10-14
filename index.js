'use strict';

var asm = {};

const iSet = require('./instructionSet');

/* Assembles the given code into machine code */
asm.assemble = (code, showAddress) => {
  showAddress = showAddress || false;
  let labels = {};
  let startWith = 0;
  let assembledCode = [];

  /* Preprocessing : Decomment */
  let codeLines = asm.decomment(code).split('\n').map(cl => cl.trim());

  /* First Pass: Get all labels in labels obj */
  codeLines.reduce((startWith, codeLine) => {
    if(asm.isORGDirective(codeLine)) {
      startWith = asm.getORGLocation(codeLine);
    } else {
      if(asm.isLabel(codeLine)) {
        labels[asm.getLabel(codeLine)] = asm.toHex(startWith);
      }
      startWith += asm.getInstructionSize(codeLine);
    }
    return startWith;
  }, startWith);

  /* Second Pass: Expand mnemonics, replace label tags with actual line number */
  startWith = -1;
  codeLines.forEach((codeLine, index) => {
    if(asm.isORGDirective(codeLine)) {
      startWith = asm.getORGLocation(codeLine) - 1;
    } else {
      let iFormat = asm.sanitize(codeLine);
      let operands = asm.getInstructionOperands(codeLine);
      let lastOperand = operands[operands.length - 1];

      /* First step for each instruction */
      assembledCode.push({ address: asm.toHex(++startWith), code: iSet[iFormat].code });

      switch(asm.getInstructionSize(codeLine)) {
        case 2: assembledCode.push({ address: asm.toHex(++startWith), code: lastOperand }); break;
        case 3:
          lastOperand = (asm.isLabelInstruction(codeLine) && lastOperand in labels) ? labels[lastOperand] : lastOperand;
          assembledCode.push({ address: asm.toHex(++startWith), code: lastOperand.slice(-2) });
          assembledCode.push({ address: asm.toHex(++startWith), code: lastOperand.slice(-4, -2) });
          break;
      }
    }
  });

  return assembledCode.reduce((string, value) => string += ((showAddress? (value.address + ' ') : '') + value.code + '\n'), '');
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

/* Remove comments, anything starting with ; */
asm.decomment = code => code.replace(/(;.*)/g, '').trim();

/* Tells whether given line has a label to it */
asm.isLabel = codeLine => codeLine.split(' ')[0].endsWith(':');

/* Returns label of a code line with a label to it */
asm.getLabel = codeLine => codeLine.split(' ')[0].slice(0, -1);

/* Checks whether given code line is a DB directive */
asm.isDBDirective = codeLine => codeLine.trim().startsWith('# DB');

/* Checks whether given code line is an ORG directive */
asm.isORGDirective = codeLine => codeLine.trim().startsWith('# ORG');

/* Checks validity of code line based on instruction set*/
asm.isValidInstruction = codeLine => asm.sanitize(codeLine) in iSet;

/* Removes label from a given code line, if any */
asm.removeLabel = codeLine => codeLine.replace(/[a-zA-Z]+:/g, '').trim();

/* Returns the decimal location where an ORG directive instruction points to */
asm.getORGLocation = orgLine => parseInt(orgLine.replace('# ORG', '').trim(), 16);

/* Returns the mnemonic of main instruction */
asm.getInstructionName = codeLine => codeLine.split(' ')[(asm.isLabel(codeLine) ? 1 : 0)];

/* Returns upper case hex string of 4 digits for given decimal number */
asm.toHex = decimalNumber => ("000" + decimalNumber.toString(16).toUpperCase()).slice(-4);

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
