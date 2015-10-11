'use strict';

module.exports = {
  dataInstructions: ['ACI', 'ADI', 'ANI', 'MVI', 'CPI', 'ORI', 'SBI', 'SUI', 'XRI', 'LXI'],
  labelInstructions: ['JMP', 'JC', 'JM', 'JNC', 'JNZ', 'JP', 'JPE', 'JPO', 'JZ', 'CALL', 'CC', 'CM', 'CNC', 'CNZ', 'CP', 'CPE', 'CPO', 'CZ', 'LDA', 'LHLD', 'SHLD', 'STA'],
  'ACI data': {
    'size': 2,
    'code': 'CE',
    'desc': 'Add with Carry Immediate'
  },
  'ADC A': {
    'size': 1,
    'code': '8F',
    'desc': 'Add with Carry'
  },
  'ADC B': {
    'size': 1,
    'code': '88',
    'desc': 'Add with Carry'
  },
  'ADC C': {
    'size': 1,
    'code': '89',
    'desc': 'Add with Carry'
  },
  'ADC D': {
    'size': 1,
    'code': '8A',
    'desc': 'Add with Carry'
  },
  'ADC E': {
    'size': 1,
    'code': '8B',
    'desc': 'Add with Carry'
  },
  'ADC H': {
    'size': 1,
    'code': '8C',
    'desc': 'Add with Carry'
  },
  'ADC L': {
    'size': 1,
    'code': '8D',
    'desc': 'Add with Carry'
  },
  'ADC M': {
    'size': 1,
    'code': '8E',
    'desc': 'Add with Carry to Memory'
  },
  'ADD A': {
    'size': 1,
    'code': '87',
    'desc': 'Add'
  },
  'ADD B': {
    'size': 1,
    'code': '80',
    'desc': 'Add'
  },
  'ADD C': {
    'size': 1,
    'code': '81',
    'desc': 'Add'
  },
  'ADD D': {
    'size': 1,
    'code': '82',
    'desc': 'Add'
  },
  'ADD E': {
    'size': 1,
    'code': '83',
    'desc': 'Add'
  },
  'ADD H': {
    'size': 1,
    'code': '84',
    'desc': 'Add'
  },
  'ADD L': {
    'size': 1,
    'code': '85',
    'desc': 'Add'
  },
  'ADD M': {
    'size': 1,
    'code': '86',
    'desc': 'Add to Memory'
  },
  'ADI data': {
    'size': 2,
    'code': 'C6',
    'desc': 'Add Immediate'
  },
  'ANA A': {
    'size': 1,
    'code': 'A7',
    'desc': 'AND Accumulator'
  },
  'ANA B': {
    'size': 1,
    'code': 'A0',
    'desc': 'AND Accumulator'
  },
  'ANA C': {
    'size': 1,
    'code': 'A1',
    'desc': 'AND Accumulator'
  },
  'ANA D': {
    'size': 1,
    'code': 'A2',
    'desc': 'AND Accumulator'
  },
  'ANA E': {
    'size': 1,
    'code': 'A3',
    'desc': 'AND Accumulator'
  },
  'ANA H': {
    'size': 1,
    'code': 'A4',
    'desc': 'AND Accumulator'
  },
  'ANA L': {
    'size': 1,
    'code': 'A5',
    'desc': 'AND Accumulator'
  },
  'ANA M': {
    'size': 1,
    'code': 'A6',
    'desc': 'AND Accumulator and Memory'
  },
  'ANI data': {
    'size': 2,
    'code': 'E6',
    'desc': 'AND Immediate'
  },
  'CALL address': {
    'size': 3,
    'code': 'CD',
    'desc': 'Call unconditional'
  },
  'CC address': {
    'size': 3,
    'code': 'DC',
    'desc': 'Call on Carry'
  },
  'CM address': {
    'size': 3,
    'code': 'FC',
    'desc': 'Call on Minus'
  },
  'CMA': {
    'size': 1,
    'code': '2F',
    'desc': 'Complement Accumulator'
  },
  'CMC': {
    'size': 1,
    'code': '3F',
    'desc': 'Complement Carry'
  },
  'CMP A': {
    'size': 1,
    'code': 'BF',
    'desc': 'Compare'
  },
  'CMP B': {
    'size': 1,
    'code': 'B8',
    'desc': 'Compare'
  },
  'CMP C': {
    'size': 1,
    'code': 'B9',
    'desc': 'Compare'
  },
  'CMP D': {
    'size': 1,
    'code': 'BA',
    'desc': 'Compare'
  },
  'CMP E': {
    'size': 1,
    'code': 'BB',
    'desc': 'Compare'
  },
  'CMP H': {
    'size': 1,
    'code': 'BC',
    'desc': 'Compare'
  },
  'CMP L': {
    'size': 1,
    'code': 'BD',
    'desc': 'Compare'
  },
  'CMP M': {
    'size': 1,
    'code': 'BF',
    'desc': 'Compare with Memory'
  },
  'CNC address': {
    'size': 3,
    'code': 'D4',
    'desc': 'Call on No Carry'
  },
  'CNZ address': {
    'size': 3,
    'code': 'C4',
    'desc': 'Call on No Zero'
  },
  'CP address': {
    'size': 3,
    'code': 'F4',
    'desc': 'Call on Plus'
  },
  'CPE address': {
    'size': 3,
    'code': 'EC',
    'desc': 'Call on Parity Even'
  },
  'CPI data': {
    'size': 2,
    'code': 'FE',
    'desc': 'Compare Immediate'
  },
  'CPO address': {
    'size': 3,
    'code': 'E4',
    'desc': 'Call on Parity Odd'
  },
  'CZ address': {
    'size': 3,
    'code': 'CC',
    'desc': 'Call on Zero'
  },
  'DAA': {
    'size': 1,
    'code': '27',
    'desc': 'Decimal Adjust Accumulator'
  },
  'DAD B': {
    'size': 1,
    'code': '09',
    'desc': 'Double Add BC to HL'
  },
  'DAD D': {
    'size': 1,
    'code': '19',
    'desc': 'Double Add DE to HL'
  },
  'DAD H': {
    'size': 1,
    'code': '29',
    'desc': 'Double Add HL to HL'
  },
  'DAD SP': {
    'size': 1,
    'code': '39',
    'desc': 'Double Add SP to HL'
  },
  'DCR A': {
    'size': 1,
    'code': '3D',
    'desc': 'Decrement'
  },
  'DCR B': {
    'size': 1,
    'code': '05',
    'desc': 'Decrement'
  },
  'DCR C': {
    'size': 1,
    'code': '0D',
    'desc': 'Decrement'
  },
  'DCR D': {
    'size': 1,
    'code': '15',
    'desc': 'Decrement'
  },
  'DCR E': {
    'size': 1,
    'code': '1D',
    'desc': 'Decrement'
  },
  'DCR H': {
    'size': 1,
    'code': '25',
    'desc': 'Decrement'
  },
  'DCR L': {
    'size': 1,
    'code': '2D',
    'desc': 'Decrement'
  },
  'DCR M': {
    'size': 1,
    'code': '35',
    'desc': 'Decrement Memory'
  },
  'DCX B': {
    'size': 1,
    'code': '0B',
    'desc': 'Decrement BC'
  },
  'DCX D': {
    'size': 1,
    'code': '1B',
    'desc': 'Decrement DE'
  },
  'DCX H': {
    'size': 1,
    'code': '2B',
    'desc': 'Decrement HL'
  },
  'DCX SP': {
    'size': 1,
    'code': '3B',
    'desc': 'Decrement Stack Pointer'
  },
  'DI': {
    'size': 1,
    'code': 'F3',
    'desc': 'Disable Interrupts'
  },
  'EI': {
    'size': 1,
    'code': 'FB',
    'desc': 'Enable Interrupts'
  },
  'HLT': {
    'size': 1,
    'code': '76',
    'desc': 'Halt'
  },
  'IN p': {
    'size': 2,
    'code': 'DB',
    'desc': 'Input'
  },
  'INR A': {
    'size': 1,
    'code': '3C',
    'desc': 'Increment'
  },
  'INR B': {
    'size': 1,
    'code': '04',
    'desc': 'Increment'
  },
  'INR C': {
    'size': 1,
    'code': '0C',
    'desc': 'Increment'
  },
  'INR D': {
    'size': 1,
    'code': '14',
    'desc': 'Increment'
  },
  'INR E': {
    'size': 1,
    'code': '1C',
    'desc': 'Increment'
  },
  'INR H': {
    'size': 1,
    'code': '24',
    'desc': 'Increment'
  },
  'INR L': {
    'size': 1,
    'code': '2C',
    'desc': 'Increment'
  },
  'INR M': {
    'size': 1,
    'code': '3C',
    'desc': 'Increment Memory'
  },
  'INX B': {
    'size': 1,
    'code': '03',
    'desc': 'Increment BC'
  },
  'INX D': {
    'size': 1,
    'code': '13',
    'desc': 'Increment DE'
  },
  'INX H': {
    'size': 1,
    'code': '23',
    'desc': 'Increment HL'
  },
  'INX SP': {
    'size': 1,
    'code': '33',
    'desc': 'Increment Stack Pointer'
  },
  'JMP address': {
    'size': 3,
    'code': 'C3',
    'desc': 'Jump unconditional'
  },
  'JC address': {
    'size': 3,
    'code': 'DA',
    'desc': 'Jump on Carry'
  },
  'JM address': {
    'size': 3,
    'code': 'FA',
    'desc': 'Jump on Minus'
  },
  'JNC address': {
    'size': 3,
    'code': 'D2',
    'desc': 'Jump on No Carry'
  },
  'JNZ address': {
    'size': 3,
    'code': 'C2',
    'desc': 'Jump on No Zero'
  },
  'JP address': {
    'size': 3,
    'code': 'F2',
    'desc': 'Jump on Plus'
  },
  'JPE address': {
    'size': 3,
    'code': 'EA',
    'desc': 'Jump on Parity Even'
  },
  'JPO address': {
    'size': 3,
    'code': 'E2',
    'desc': 'Jump on Parity Odd'
  },
  'JZ address': {
    'size': 3,
    'code': 'CA',
    'desc': 'Jump on Zero'
  },
  'LDA address': {
    'size': 3,
    'code': '3A',
    'desc': 'Load Accumulator direct'
  },
  'LDAX B': {
    'size': 1,
    'code': '0A',
    'desc': 'Load Accumulator indirect'
  },
  'LDAX D': {
    'size': 1,
    'code': '1A',
    'desc': 'Load Accumulator indirect'
  },
  'LHLD address': {
    'size': 3,
    'code': '2A',
    'desc': 'Load HL Direct'
  },
  'LXI B,data': {
    'size': 3,
    'code': '01',
    'desc': 'Load Immediate BC'
  },
  'LXI D,data': {
    'size': 3,
    'code': '11',
    'desc': 'Load Immediate DE'
  },
  'LXI H,data': {
    'size': 3,
    'code': '21',
    'desc': 'Load Immediate HL'
  },
  'LXI SP,n': {
    'size': 3,
    'code': '31',
    'desc': 'Load Immediate Stack Ptr'
  },
  'MOV A,B': {
    'size': 1,
    'code': '78',
    'desc': 'Move register to register'
  },
  'MOV A,C': {
    'size': 1,
    'code': '79',
    'desc': 'Move register to register'
  },
  'MOV A,D': {
    'size': 1,
    'code': '7A',
    'desc': 'Move register to register'
  },
  'MOV A,E': {
    'size': 1,
    'code': '7B',
    'desc': 'Move register to register'
  },
  'MOV A,H': {
    'size': 1,
    'code': '7C',
    'desc': 'Move register to register'
  },
  'MOV A,L': {
    'size': 1,
    'code': '7D',
    'desc': 'Move register to register'
  },
  'MOV A,M': {
    'size': 1,
    'code': '7E',
    'desc': 'Move memory to register'
  },
  'MOV A,A': {
    'size': 1,
    'code': '7F',
    'desc': 'Move register to register'
  },
  'MOV B,B': {
    'size': 1,
    'code': '40',
    'desc': 'Move register to register'
  },
  'MOV B,C': {
    'size': 1,
    'code': '41',
    'desc': 'Move register to register'
  },
  'MOV B,D': {
    'size': 1,
    'code': '42',
    'desc': 'Move register to register'
  },
  'MOV B,E': {
    'size': 1,
    'code': '43',
    'desc': 'Move register to register'
  },
  'MOV B,H': {
    'size': 1,
    'code': '44',
    'desc': 'Move register to register'
  },
  'MOV B,L': {
    'size': 1,
    'code': '45',
    'desc': 'Move register to register'
  },
  'MOV B,M': {
    'size': 1,
    'code': '46',
    'desc': 'Move register to register'
  },
  'MOV B,A': {
    'size': 1,
    'code': '47',
    'desc': 'Move register to register'
  },
  'MOV C,B': {
    'size': 1,
    'code': '48',
    'desc': 'Move register to register'
  },
  'MOV C,C': {
    'size': 1,
    'code': '49',
    'desc': 'Move register to register'
  },
  'MOV C,D': {
    'size': 1,
    'code': '4A',
    'desc': 'Move register to register'
  },
  'MOV C,E': {
    'size': 1,
    'code': '4B',
    'desc': 'Move register to register'
  },
  'MOV C,H': {
    'size': 1,
    'code': '4C',
    'desc': 'Move register to register'
  },
  'MOV C,L': {
    'size': 1,
    'code': '4D',
    'desc': 'Move register to register'
  },
  'MOV C,M': {
    'size': 1,
    'code': '4E',
    'desc': 'Move register to register'
  },
  'MOV C,A': {
    'size': 1,
    'code': '4F',
    'desc': 'Move register to register'
  },
  'MOV D,B': {
    'size': 1,
    'code': '50',
    'desc': 'Move register to register'
  },
  'MOV D,C': {
    'size': 1,
    'code': '51',
    'desc': 'Move register to register'
  },
  'MOV D,D': {
    'size': 1,
    'code': '52',
    'desc': 'Move register to register'
  },
  'MOV D,E': {
    'size': 1,
    'code': '53',
    'desc': 'Move register to register'
  },
  'MOV D,H': {
    'size': 1,
    'code': '54',
    'desc': 'Move register to register'
  },
  'MOV D,L': {
    'size': 1,
    'code': '55',
    'desc': 'Move register to register'
  },
  'MOV D,M': {
    'size': 1,
    'code': '56',
    'desc': 'Move register to register'
  },
  'MOV D,A': {
    'size': 1,
    'code': '57',
    'desc': 'Move register to register'
  },
  'MOV E,B': {
    'size': 1,
    'code': '58',
    'desc': 'Move register to register'
  },
  'MOV E,C': {
    'size': 1,
    'code': '59',
    'desc': 'Move register to register'
  },
  'MOV E,D': {
    'size': 1,
    'code': '5A',
    'desc': 'Move register to register'
  },
  'MOV E,E': {
    'size': 1,
    'code': '5B',
    'desc': 'Move register to register'
  },
  'MOV E,H': {
    'size': 1,
    'code': '5C',
    'desc': 'Move register to register'
  },
  'MOV E,L': {
    'size': 1,
    'code': '5D',
    'desc': 'Move register to register'
  },
  'MOV E,M': {
    'size': 1,
    'code': '5E',
    'desc': 'Move register to register'
  },
  'MOV E,A': {
    'size': 1,
    'code': '5F',
    'desc': 'Move register to register'
  },
  'MOV H,B': {
    'size': 1,
    'code': '60',
    'desc': 'Move register to register'
  },
  'MOV H,C': {
    'size': 1,
    'code': '61',
    'desc': 'Move register to register'
  },
  'MOV H,D': {
    'size': 1,
    'code': '62',
    'desc': 'Move register to register'
  },
  'MOV H,E': {
    'size': 1,
    'code': '63',
    'desc': 'Move register to register'
  },
  'MOV H,H': {
    'size': 1,
    'code': '64',
    'desc': 'Move register to register'
  },
  'MOV H,L': {
    'size': 1,
    'code': '65',
    'desc': 'Move register to register'
  },
  'MOV H,M': {
    'size': 1,
    'code': '66',
    'desc': 'Move register to register'
  },
  'MOV H,A': {
    'size': 1,
    'code': '67',
    'desc': 'Move register to register'
  },
  'MOV L,B': {
    'size': 1,
    'code': '68',
    'desc': 'Move register to register'
  },
  'MOV L,C': {
    'size': 1,
    'code': '69',
    'desc': 'Move register to register'
  },
  'MOV L,D': {
    'size': 1,
    'code': '6A',
    'desc': 'Move register to register'
  },
  'MOV L,E': {
    'size': 1,
    'code': '6B',
    'desc': 'Move register to register'
  },
  'MOV L,H': {
    'size': 1,
    'code': '6C',
    'desc': 'Move register to register'
  },
  'MOV L,L': {
    'size': 1,
    'code': '6D',
    'desc': 'Move register to register'
  },
  'MOV L,M': {
    'size': 1,
    'code': '6E',
    'desc': 'Move register to register'
  },
  'MOV L,A': {
    'size': 1,
    'code': '6F',
    'desc': 'Move register to register'
  },
  'MOV M,B': {
    'size': 1,
    'code': '70',
    'desc': 'Move register to register'
  },
  'MOV M,C': {
    'size': 1,
    'code': '71',
    'desc': 'Move register to register'
  },
  'MOV M,D': {
    'size': 1,
    'code': '72',
    'desc': 'Move register to register'
  },
  'MOV M,E': {
    'size': 1,
    'code': '73',
    'desc': 'Move register to register'
  },
  'MOV M,H': {
    'size': 1,
    'code': '74',
    'desc': 'Move register to register'
  },
  'MOV M,L': {
    'size': 1,
    'code': '75',
    'desc': 'Move register to register'
  },
  'MOV M,A': {
    'size': 1,
    'code': '77',
    'desc': 'Move register to register'
  },
  'MVI A,n': {
    'size': 2,
    'code': '3E',
    'desc': 'Move Immediate'
  },
  'MVI B,n': {
    'size': 2,
    'code': '06',
    'desc': 'Move Immediate'
  },
  'MVI C,n': {
    'size': 2,
    'code': '0E',
    'desc': 'Move Immediate'
  },
  'MVI D,n': {
    'size': 2,
    'code': '16',
    'desc': 'Move Immediate'
  },
  'MVI E,n': {
    'size': 2,
    'code': '1E',
    'desc': 'Move Immediate'
  },
  'MVI H,n': {
    'size': 2,
    'code': '26',
    'desc': 'Move Immediate'
  },
  'MVI L,n': {
    'size': 2,
    'code': '2E',
    'desc': 'Move Immediate'
  },
  'MVI M,n': {
    'size': 2,
    'code': '36',
    'desc': 'Move Immediate to Memory'
  },
  'NOP': {
    'size': 1,
    'code': '00',
    'desc': 'No Operation'
  },
  'ORA A': {
    'size': 1,
    'code': 'B7',
    'desc': 'Inclusive OR Accumulator'
  },
  'ORA B': {
    'size': 1,
    'code': 'B0',
    'desc': 'Inclusive OR Accumulator'
  },
  'ORA C': {
    'size': 1,
    'code': 'B1',
    'desc': 'Inclusive OR Accumulator'
  },
  'ORA D': {
    'size': 1,
    'code': 'B2',
    'desc': 'Inclusive OR Accumulator'
  },
  'ORA E': {
    'size': 1,
    'code': 'B3',
    'desc': 'Inclusive OR Accumulator'
  },
  'ORA H': {
    'size': 1,
    'code': 'B4',
    'desc': 'Inclusive OR Accumulator'
  },
  'ORA L': {
    'size': 1,
    'code': 'B5',
    'desc': 'Inclusive OR Accumulator'
  },
  'ORA M': {
    'size': 1,
    'code': 'B6',
    'desc': 'Inclusive OR Accumulator'
  },
  'ORI data': {
    'size': 2,
    'code': 'F6',
    'desc': 'Inclusive OR Immediate'
  },
  'OUT p': {
    'size': 2,
    'code': 'D3',
    'desc': 'Output'
  },
  'PCHL': {
    'size': 1,
    'code': 'E9',
    'desc': 'Jump HL indirect'
  },
  'POP B': {
    'size': 1,
    'code': 'C1',
    'desc': 'Pop BC'
  },
  'POP D': {
    'size': 1,
    'code': 'D1',
    'desc': 'Pop DE'
  },
  'POP H': {
    'size': 1,
    'code': 'E1',
    'desc': 'Pop HL'
  },
  'POP PSW': {
    'size': 1,
    'code': 'F1',
    'desc': 'Pop Processor Status Word'
  },
  'PUSH B': {
    'size': 1,
    'code': 'C5',
    'desc': 'Push BC'
  },
  'PUSH D': {
    'size': 1,
    'code': 'D5',
    'desc': 'Push DE'
  },
  'PUSH H': {
    'size': 1,
    'code': 'E5',
    'desc': 'Push HL'
  },
  'PUSH PSW': {
    'size': 1,
    'code': 'F5',
    'desc': 'Push Proessor Status Word'
  },
  'RAL': {
    'size': 1,
    'code': '17',
    'desc': 'Rotate Accumulator Left'
  },
  'RAR': {
    'size': 1,
    'code': '1F',
    'desc': 'Rotate Accumulator Righ'
  },
  'RET': {
    'size': 1,
    'code': 'C9',
    'desc': 'Return'
  },
  'RC': {
    'size': 1,
    'code': 'D8',
    'desc': 'Return on Carry'
  },
  'RIM': {
    'size': 1,
    'code': '20',
    'desc': 'Read Interrupt Mask'
  },
  'RM': {
    'size': 1,
    'code': 'F8',
    'desc': 'Return on Minus'
  },
  'RNC': {
    'size': 1,
    'code': 'D0',
    'desc': 'Return on No Carry'
  },
  'RNZ': {
    'size': 1,
    'code': 'C0',
    'desc': 'Return on No Zero'
  },
  'RP': {
    'size': 1,
    'code': 'F0',
    'desc': 'Return on Plus'
  },
  'RPE': {
    'size': 1,
    'code': 'E8',
    'desc': 'Return on Parity Even'
  },
  'RPO': {
    'size': 1,
    'code': 'E0',
    'desc': 'Return on Parity Odd'
  },
  'RZ': {
    'size': 1,
    'code': 'C8',
    'desc': 'Return on Zero'
  },
  'RLC': {
    'size': 1,
    'code': '07',
    'desc': 'Rotate Left Circular'
  },
  'RRC': {
    'size': 1,
    'code': '0F',
    'desc': 'Rotate Right Circular'
  },
  'RST z': {
    'size': 1,
    'code': 'C7',
    'desc': 'Restart (3X7)'
  },
  'SBB A': {
    'size': 1,
    'code': '9F',
    'desc': 'Subtract with Borrow'
  },
  'SBB B': {
    'size': 1,
    'code': '98',
    'desc': 'Subtract with Borrow'
  },
  'SBB C': {
    'size': 1,
    'code': '99',
    'desc': 'Subtract with Borrow'
  },
  'SBB D': {
    'size': 1,
    'code': '9A',
    'desc': 'Subtract with Borrow'
  },
  'SBB E': {
    'size': 1,
    'code': '9B',
    'desc': 'Subtract with Borrow'
  },
  'SBB H': {
    'size': 1,
    'code': '9C',
    'desc': 'Subtract with Borrow'
  },
  'SBB L': {
    'size': 1,
    'code': '9D',
    'desc': 'Subtract with Borrow'
  },
  'SBB M': {
    'size': 1,
    'code': '9E',
    'desc': 'Subtract with Borrow'
  },
  'SBI data': {
    'size': 2,
    'code': 'DE',
    'desc': 'Subtract with Borrow Immed'
  },
  'SHLD address': {
    'size': 3,
    'code': '22',
    'desc': 'Store HL Direct'
  },
  'SIM': {
    'size': 1,
    'code': '30',
    'desc': 'Set Interrupt Mask'
  },
  'SPHL': {
    'size': 1,
    'code': 'F9',
    'desc': 'Move HL to SP'
  },
  'STA address': {
    'size': 3,
    'code': '32',
    'desc': 'Store Accumulator'
  },
  'STAX B': {
    'size': 1,
    'code': '02',
    'desc': 'Store Accumulator indirect'
  },
  'STAX D': {
    'size': 1,
    'code': '12',
    'desc': 'Store Accumulator indirect'
  },
  'STC': {
    'size': 1,
    'code': '37',
    'desc': 'Set Carry'
  },
  'SUB A': {
    'size': 1,
    'code': '97',
    'desc': 'Subtract'
  },
  'SUB B': {
    'size': 1,
    'code': '90',
    'desc': 'Subtract'
  },
  'SUB C': {
    'size': 1,
    'code': '91',
    'desc': 'Subtract'
  },
  'SUB D': {
    'size': 1,
    'code': '92',
    'desc': 'Subtract'
  },
  'SUB E': {
    'size': 1,
    'code': '93',
    'desc': 'Subtract'
  },
  'SUB H': {
    'size': 1,
    'code': '94',
    'desc': 'Subtract'
  },
  'SUB L': {
    'size': 1,
    'code': '95',
    'desc': 'Subtract'
  },
  'SUB M': {
    'size': 1,
    'code': '96',
    'desc': 'Subtract Memory'
  },
  'SUI data': {
    'size': 2,
    'code': 'D6',
    'desc': 'Subtract Immediate'
  },
  'XCHG': {
    'size': 1,
    'code': 'EB',
    'desc': 'Exchange HL with DE'
  },
  'XRA A': {
    'size': 1,
    'code': 'AF',
    'desc': 'Exclusive OR Accumulator'
  },
  'XRA B': {
    'size': 1,
    'code': 'A8',
    'desc': 'Exclusive OR Accumulator'
  },
  'XRA C': {
    'size': 1,
    'code': 'A9',
    'desc': 'Exclusive OR Accumulator'
  },
  'XRA D': {
    'size': 1,
    'code': 'AA',
    'desc': 'Exclusive OR Accumulator'
  },
  'XRA E': {
    'size': 1,
    'code': 'AB',
    'desc': 'Exclusive OR Accumulator'
  },
  'XRA H': {
    'size': 1,
    'code': 'AC',
    'desc': 'Exclusive OR Accumulator'
  },
  'XRA L': {
    'size': 1,
    'code': 'AD',
    'desc': 'Exclusive OR Accumulator'
  },
  'XRA M': {
    'size': 1,
    'code': 'AE',
    'desc': 'Exclusive OR Accumulator'
  },
  'XRI data': {
    'size': 2,
    'code': 'EE',
    'desc': 'Exclusive OR Immediate'
  },
  'XTHL': {
    'size': 1,
    'code': 'E3',
    'desc': 'Exchange stack Top with HL'
  }
};
