; numbers are stored at C050 and C051
; result is to be stored at C052
LXI H,C050
MOV A,M
INX H
ADD M
STA C052
HLT
