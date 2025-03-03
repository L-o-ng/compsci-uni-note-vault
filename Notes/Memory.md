#notes 

A memory, in an abstract sense, is a "pidgeon hole" containing data.
Each hole has a unique address and holds 1 byte of storage.
+ Larger **words** can be formed by dealing with batches of bytes.
+ Memory addresses are $1, 2, 3, \dots$ but represented by strings of bits.
## Buses
There are 3 different buses:
+ Address bus: 
	+ Determines location in memory.
	+ Width determines size of addressable memory.
+ Data bus:
	+ Carries contents of memory.
	+ Width determines word size.
+ Control bus:
	+ Deals with information transfer.
## Speed
Cost and performance of memory is proportional to its distance from the CPU.
### Rankings
1) CPU Registers
2) Cache - level 1, level 2
3) RAM - physical RAM, virtual memory
4) Storage devices
5) Input sources
## Types of Storage
+ **Hard drives**:
	+ **Disk drives**: 
		+ Magnetic secondary storage.
		+ Cheap and slow.
	+ **Solid State drives**:
		+ Flash-based memory.
		+ Faster than a HDD, but still slower than RAM.
+ **RAM**:
	+ **Dynamic RAM**, or DRAM:
		+ Bit of data stored by [[Transistors|a transistor]] or capacitor.
		+ Cheaper, "leaky" so need to refresh, and slow.
+ **Cache**:
	+ Expensive memory used to store rapidly accessed data items.
	+ **Level 1 cache**/static RAM:
		+ Often built into the CPU.
		+ Small and fast.
	+ **Level 2 cache**/static RAM:
		+ Often in the CPU, or if not then a short distance away.

