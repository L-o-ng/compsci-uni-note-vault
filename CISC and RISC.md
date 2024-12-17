#notes 

CISC and RISC - the **complex instruction set computers**, and **reduced instruction set computers** - are 2 different instruction sets.
## RISC
![[SPARC RISC model.png]]
The RISC model is a limited and simplified instruction set. This makes execution efficient. Instructions are register-oriented, so they have limited memory access - there are essentially only load and store instructions, and the computation is done on registers.
Instruction length and format are fixed, enabling independent fetch and decode. There are limited addressing modes - direct or register indirect (see [[Programming in AVR#Addressing Modes|Addressing Modes]]). It has a large bank of registers, avoiding the use of load and store operations for intermediate results.
## CISC
![[IBM Mainframe CISC.png]]
The CISC model has: 
+ A large number of specialised instructions.
+ A wide variety of addressing modes.
+ A variety of instruction lengths.
+ Comparatively few general-purpose registers.
## Comparison
RISC was brought about by the idea that simplified instructions can be executed faster than complex instructions. At the time, even simple CISC instructions were slowed down by hardware complexity in the instruction decoder.
Nowadays, RISC chips include more instructions and reduce program size. Newer CISCs have more general purpose registers. Some CPUs have CISs but translate complex instructions into internal micro-ops of fixed lengths, similar to RISCs. The performance is now very similar.