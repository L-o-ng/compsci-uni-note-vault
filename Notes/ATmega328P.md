#notes 

ATmega328P refers to a micro-controller used on circuit boards such as the Arduino Uno R3.
## Main Technical Characteristics
### Micro-controller vs Microprocessor
A micro-controller is an **integrated device** - a computer in a chip, consisting of:
+ A microprocessor:
	+ ALU
	+ PC
	+ Registers
+ Memory
	+ Flash
	+ SRAM
+ I/O
---
 They are used in embedded systems, with the program usually stored in flash memory, and may never change during the device's lifetime.
### Arduino UNO 
This device uses the ATmega328P micro-controller.
It is built on: 
+ A [[Harvard Architecture]].
+ An 8-bit processor, so 8-bit registers, and 8-bit buses.
+ 16-bit word size, with some 32-bit instructions.
## Registers
There are 32 general purpose 8-bit registers.
They are also mapped onto the SRAM memory. Other SRAM memory locations are also designated as registers.
![[ATmega328P Register example.png]]
![[ATmega328P Registers example 2.png]]
The six 8-bit registers `R26`-`R31` should be treated as three 16-bit registers, named `X`, `Y`, and `Z`; they are used for indirect addressing.
### Status Register
The **status register** is an 8-bit register. Each bit is a flag, and have standard names documented in the AVR Assembly documentation. Arithmetic and logic functions may update the status register depending on the operation result, ehich can be used in subsequent operations.
![[ATmega328P status register example.png]]
## Memory Map
There are 2 main memory spaces inherited from [[Harvard Architecture]] design:
+ Data memory - SRAM and EEPROM
+ Program memory - Flash
### Flash
AVR instructions are 16 or 32 bits wide, so the flash memory is organized as 2/4/8/16K x 16.
It is divided into 2 sections:
+ Bootloader section
+ Application Program section
The Arduino's flash has an endurance of at least 10000 write/erase cycles.
The program counter is 14-bits wide, addressing the 16K program memory locations.
![[ATmega328P flash.png]]
### Data Memory - SRAM
![[ATmega238P SRAM.png]]
**SRAM**, or Static Random Access Memory, is divided into sections used as: 
+ Mapping space of ALU registers.
+ I/O Registers and extended I/O registers
+ Internal SRAM
### EEPROM
1KB of **EEPROM** (Electrically Erasable Programmable Read-Only Memory) is provided on the chip. It is organised as a separate space for storing data.
The Arduino's EEPROM has a 100000 cycle endurance.
## I/O
The ATmega328P's I/O pins are grouped in three ports:
+ B (digital)
+ C (analogue)
+ D (digital)
![[ATmega328P IO ports.png]]
### Data Direction Registers
The direction of each pin of a port (ie: input or output) is controlled by 8-bit data-direction registers: **DDRB**, **DDRC**, and **DDRD**.
	We do not have to use the explicit memory locations of these registers in programs: the assembler understands their names.
While in principle we could still use their absolute locations, that would affect the compatibility of out code with other AVR micro-controllers.
#### Setting Pin Direction
Whether a pin is used as I or O is controlled by a single bit:
+ A bit is **set** when it is 1. Then, the corresponding pin is output.
+ A bit is **cleared** when it is 0. Then, the corresponding pin is input.
We can control a pin's direction by manipulating single values of a register with the instructions `sbi` - set bit; and `cbi` - clear bit:

```
SBI DDRB, 4 ;set PB4, ie declare pin PB4 as output
CBU DDRD, 2 ;clear PD2, ie declare pin PD2 as input
```
#### Reading Pin Input Values
Assuming that a pin has been declared as an input pin, at any specific moment, that pin has a certain status: there is either an incoming electric signal, or not.
This information is recorded on the corresponding bit of the corresponding I/O register:
+ **PINB** 
+ **PINC**
+ **PIND**
##### Example
If pin `PD2` is input, then the second bit: `PIND, 2` of the register `PIND` records the current status of that pin.
#### Setting Output Pin Values
Assume that a pin has been declared as output pin. At any specific moment in the time, we can set this pin to a certain status. 
Either we send an outcoming electric signal through that pin, or not.  
This is controlled by the corresponding bit of the I/O registers: **PORTB**, **PORTC**, and **PORTD**.
##### Example
Assume pin `PB4` is output. The second bit `PORTB,4` of the register `PORTB` controls the current status of that pin. By setting that bit, we send electric current through that pin. By clearing it, the electric current stops.
