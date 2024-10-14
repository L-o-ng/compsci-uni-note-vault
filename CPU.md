#notes

A **CPU**, **Processor**, or **Silicon Chip** is an ==integrated circuit==.
They are made up of millions of [[Transistors|transistors]] interconnected by microscopic wires within a $1cm^2$ footprint.

## Production
+ Initially, hundreds of copies of the same IC are **etched** on a wafer of silicon (a **die**).
+ Dies are tested and each error-die is cut and **mounted** in a **package** with the die's **pads** connected to the package **pins**.
### Multi-core Processors
+ Multiple independent cores/CPUs are manufactured on the *same* IC.

---
## Moore's Law
+ *"Transistor capacity doubles every 18-24 months"*
While this law still holds, it may not last for much longer.
Power dissipation is a problem. The power is proportional to the number of transistors switched $\times$ the clock speed.

## Processor Microarchitecture
![[Processor Microarchitecture.png]]
+ **Datapath** - Performs the data processing operations.
	+ Includes the Arithmetic Logic Unit (**ALU**).
	+ Contains **Registers**, a small amount of memory
+ **Control** - tells the datapath, memory, and I/O devices what to do.
+ **Cache** - small, fast, relatively expensive on-chip memory.