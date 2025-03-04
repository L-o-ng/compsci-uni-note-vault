#notes 

Memory comes in many types:
+ Cache memory / CPU Cache;
+ Main memory / RAM;
+ Storage memory;
+ Virtual Memory.
The cache and main memory are referred to as **primary storage**. The cache primarily supports, and is managed by, the CPU. It is invisible to the OS. It uses the same memory management approaches as main memory, so we can focus on main memory.
## Hardware
Each process has a separate memory space. A pair of **base** and **limit** registers define the logical address space. The CPU must check every memory access generated in user mode to be sure it is between base and limit for that user.
![[Memory Base and Limit.png]]
### Hardware Address Protection
Hardware address protection refers to the protection of memory required to ensure correct operation. Separate per-process memory space protects processes from interfering with each other.
![[Hardware address protection.png]]
