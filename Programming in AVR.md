#notes
## Addressing Modes
### Register Only Methods
+ Direct Register Addressing - with a *single* register.
	+ The operand is contained in register `d`.
+ Direct Register Addressing - using *two* registers.
	+ The operands are contained in registers `r` and `d`.
	+ The result is stored in register `d`.
### Data Methods
+ Direct Data Addressing
	+ A 16-bit data address is contained in the 16 **least significant bits** of a *two-word* instruction. The PC will be incremented by 2.
+ Indirect Data Addressing - with pre-decrement, post-increment, or displacement.
	+ The operand address is the contents of the `X`, `Y`, or `Z` registers.
		+ Pre-decrement: The `X`, `Y`, or `Z` register is decremented before the operation.
		+ Post-increment: The `X`, `Y`, or `Z` register is incremented after the operation.
		+ Displacement: The operand address is the *contents* of the `X`, `Y`, or `Z` register, added to the 6-bit immediate. Register `r` **or** `d` specifies the destination or source register.
### Program Memory
+ Direct Program Memory Addressing
	+ Program execution continues at the address immediate in the instruction words.
+ Relative Program Memory Addressing
	+ Program execution continues at address `PC + k + 1`. The relative address `k` is from -2048 to 2047.

## A Simple Example
### C++ Shell
An easier way to program in AVR assembly from within the Arduino IDE is to create a C++ shell file and a separate linked file for the assembly code.
![[AVR Programming C++ Shell Example.png]]
In the `setup()` function we define the program's inputs and outputs.
The `loop()` function repeats forever; usually the desired behaviour of an embedded system!
### Directives
The Assembly also contains statements called *directives*.
They do not correspond to instructions, but the assembler takes them into account during compilation. The use of directives makes maintenance and development easier.
AVR assembly directives are preceded by a dot.

The `.equ` directive creates constants:
```
.equ delayVal, 10000 ;creates a constant delayVal with value 10000
```

The `.global` directive declares functions as global.