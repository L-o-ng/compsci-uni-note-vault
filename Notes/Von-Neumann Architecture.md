#notes 

![[Von Neumann Architecture.png]]

The Von-Neumann Architecture is a fundamental computer architecture, or a stored program architecture.
+ The stored program and the data are both held in memory.
+ It allows for self modifying programs.
## Components
### CPU
#### Control Unit
Responsible for directing the flow of instructions and data.
#### Arithmetic Logic Unit
Responsible for performing operations on the data.
#### Registers
Registers are the *workspace* of the CPU. They temporarily hold a value for: 
+ Storage
+ Manipulation
+ Calculation
They are manipulated directly by the control unit, and the size varies between 1 and 128 bits.
##### Accumulator
ACCs are often seen as part of the ALU.
General purpose registers used for:  
+ Holding data.  
+ Holding interim and final results of arithmetic operations.  
+ Holding data waiting to be transferred between different memory locations.  
+ Holding data waiting to be transferred between I/O and main memory.
##### Program Counter
The program counter holds the address of the **next** instruction to be executed.
##### Instruction Register
This register holds the **actual** instruction being executed.
##### Flags
Flags are 1-bit registers keeping track of special conditions, such as carry, overflow, power failures, internal errors, etc.
Flags are grouped together in 1+ **Status Registers**.
##### Memory Address Register
This register holds the address of a memory location to be accessed. It is connected to memory via a one-way bus.
##### Memory Data/Buffer Register
This register holds the value that is being stored to/retrieved from the memory location being accessed by the memory address register. It is connected to the memory via a two-way bus.

### Main Memory
### IO Devices
### Buses
Communication between components happens via **buses** - bundles of tiny wires that carry data between components.
They are the physical connection making data transfer between system locations possible. Buses are used to:
+ Transfer data between different points on the CPU.
+ Transfer data between CPU and main memory.
+ Transfer Data between peripheral devices and the CPU
There are 3 distinct bus types.
#### Point-To-Point Buses
These carry the signal from a specific source to a specific destination.
#### Broadcast Buses
These carry signals to many different destinations.
#### Bus Interface Bridges
These allow communications between different buses:
+ External Bus
+ PCI: Peripheral Control Interface Bus
+ USB: Universal Serial Bus
---
There are 4 main buses.
#### Data Bus
#### Address Bus
#### Control Bus
#### Power Bus

## Bottleneck
The Von-Neumann Bottleneck is the limitation of the data transfer rate between the CPU and memory.
This resulted in the use of CPU caches, either on-chip or close.
