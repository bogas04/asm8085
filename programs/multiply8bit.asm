; lsb multiplicand at 2501
; msb multiplicand at 2502
; multiplier at 2503
; result lsb at 2504
; result msb at 2505
LHLD 2501
XCHG
LDA 2503
LXI H,0000
MVI C,08
LOOP: DAD H
RAL
JNC AHEAD
DAD D
AHEAD: DCR C
JNZ LOOP
SHLD 2504
HLT
