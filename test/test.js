var assert = require('assert');
var asm = require('../index');
var fs = require('fs');

describe('asm', () => {
  describe('isLabel()', () => {
    it('should return true for "abcd:"', () => {
      assert(asm.isLabel('abcd:') === true);
    });
    it('should return false for "MOV"', () => {
      assert(asm.isLabel('MOV') === false);
    });
  });
  describe('numberToTag()', () => {
    it('should return "LOOP: ADI A,data" for "LOOP: ADI A,50"', () => {
      assert(asm.numberToTag('LOOP: ADI A,50') === 'LOOP: ADI A,data');
    });
    it('should return "LOOP: ADI A,data" for "LOOP: ADI A,BC"', () => {
      assert(asm.numberToTag('LOOP: ADI A,BC') === 'LOOP: ADI A,data');
    });
    it('should return "LOOP: MOV A,B" for "LOOP: MOV A,B"', () => {
      assert(asm.numberToTag('LOOP: MOV A,B') === 'LOOP: MOV A,B');
    });
  });
  describe('labelToTag()', () => {
    it('should return "JNZ address" for "JNZ LOOP"', () => {
      assert(asm.labelToTag('JNZ LOOP') === 'JNZ address');
    });
    it('should return "LOOP: MOV A,B" for "LOOP: MOV A,B"', () => {
      assert(asm.labelToTag('LOOP: MOV A,B') === 'LOOP: MOV A,B');
    });
  });
  describe('removeLabel()', () => {
    it('should return "MOV A,B" for "LOOP: MOV A,B"', () => {
      assert(asm.removeLabel('LOOP: MOV A,B') === 'MOV A,B');
    });
    it('should return "MOV A,B" for "MOV A,B"', () => {
      assert(asm.removeLabel('MOV A,B') === 'MOV A,B');
    });
  });
  describe('sanitize()', () => {
    it('should return "ADI data" for "LOOP: ADI 12    "', () => {
      assert(asm.sanitize("LOOP: ADI 12    ") === 'ADI data');
    });
    it('should return "CZ address" for "LOOP: CZ 1234"', () => {
      assert(asm.sanitize("LOOP: CZ 1234") === 'CZ address');
    });
    it('should return "CZ address" for "LOOP: CZ FACTORIAL"', () => {
      assert(asm.sanitize("LOOP: CZ FACTORIAL") === 'CZ address');
    });
  });
  describe('decomment()', () => {
    it('should remove comments from given code', () => {
      assert(asm.decomment('LOOP: MOV A,B ; moving data of B to A') === 'LOOP: MOV A,B');
    });
  });
  describe('getInstructionName()', () => {
    it('should return MOV for "abcd: MOV A,B"', () => {
      assert(asm.getInstructionName('abcd: MOV A,B') === 'MOV');
    });
    it('should return MOV for "MOV A,B"', () => {
      assert(asm.getInstructionName('MOV A,B') === 'MOV');
    });
  });
  describe('isDataInstruction()', () => {
    it('should return true for "LOOP: ADI A,05"', () => {
      assert(asm.isDataInstruction("LOOP: ADI A,05") === true);
    });
    it('should return false for "JMP LOOP"', () => {
      assert(asm.isDataInstruction('JMP LOOP') === false);
    });
  });
  describe('isValidInstruction()', () => {
    it('should return true for "LOOP: MOV A,B"', () => {
      assert(asm.isValidInstruction('LOOP: MOV A,B') === true);
    });
    it('should return false for "LOOP: MOV G,B"', () => {
      assert(asm.isValidInstruction('LOOP: MOV G,B') === false);
    });
    it('should return false for "LOOP: MOV 1000,2000"', () => {
      assert(asm.isValidInstruction('LOOP: MOV 1000,2000') === false);
    });
    it('should return false for "bla bla bla MOV 1000,2000"', () => {
      assert(asm.isValidInstruction('bla bla bla MOV 1000,2000') === false);
    });
  });
  describe('getInstructionSize()', () => {
    it('should return 1 for "MOV A,B"', () => {
      assert(asm.getInstructionSize('MOV A,B') === 1);
    });
    it('should return 3 for "CALL 1234"', () => {
      assert(asm.getInstructionSize('CALL 1234') === 3);
    });
    it('should return 3 for "CALL MULTIPLY"', () => {
      assert(asm.getInstructionSize('CALL MULTIPLY') === 3);
    });
  });
  describe('assemble()', () => {
    it('should assemble add8bit.asm (basic program) correctly', () => {
      assert(asm.assemble(fs.readFileSync('programs/add8bit.asm', 'utf8')).trim() === fs.readFileSync('test/add8bit.asm', 'utf8').trim());
    });
    it('should assemble bubbleSort.asm (with labels, jumps etc) correctly', () => {
      assert(asm.assemble(fs.readFileSync('programs/bubbleSort.asm', 'utf8')).trim() === fs.readFileSync('test/bubbleSort.asm', 'utf8').trim());
    });
  });
});
