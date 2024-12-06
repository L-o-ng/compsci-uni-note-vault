#notes #homework-needed #incomplete 
## Addressing Modes and Instruction Set
todo! Add instruction set info from lecture 9
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