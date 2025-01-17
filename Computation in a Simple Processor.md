#notes 

![[Simplified Von Neumann Processor.png]]
## Registers
+ **Registers** are on-chip memory locations, limited in number according to hardware design decisions, and are at the top of the memory hierarchy.
+ The **Accumulator** is a special register through which arithmetic operations are carried out.
+ The **Program counter** holds the address of the next instruction to be executed.
## Fetch, Decode, Fetch, Execute
The basic processor operation is *fetch, decode, fetch, execute*.
+ **Fetch**
	+ Supply instruction address via the address bus and read an instruction from memory via the data bus.
+ **Decode**
	+ Stored instruction is interpreted by the CPU.
+ **Fetch**
	+ Supply address of data via the address bus and read it into the CPU across the data bus.
+ **Execute**
	+ Perform the necessary action by the CPU.
### In More Detail
1) CPU outputs value of program counter onto the address bus.
2) Memory puts contents at this address on the data bus.
3) Instruction is stored in instruction registers.
4) The instruction word is decoded by internal logic to provide control signals to the ALU and other internal circuits inside the CPU.
5) Program counter value is pushed onto the address bus.
6) And the ALU, having read it, increments this value by the word size in bytes and puts it back into the program counter.
7) The instruction registers provide the address of the data to be processed to the address bus.
8) Memory supplies the operand data to the data bus and so to the CPU, ready to be processed by the ALU.
9) Processing is performed on the operand by the ALU according to the instruction and the result is put back into the accumulator.
10) Also, the program counter may be updated, such as with a branch instruction.
11) The result from the accumulator may be written back into memory. This is usually a separate instruction.

