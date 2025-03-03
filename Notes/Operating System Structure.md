#notes 

A **General Purpose OS** is a very large program, so there are many paradigms that they are structured by:
+ A simple structure is **MS-DOS**.
+ A more complex structure is **UNIX** <3
## Examples
### MS-DOS
![[MS-DOS structure.png]]
MS-DOS is written to provide the most functionality in the least space. It is not divided into modules, so its interfaces and levels of functionality are not well-separated.
### UNIX
![[UNIX Structure.png]]
UNIX is a *monolithic* (single file and address space), layered microkernel. It consists of two separable parts:
+ System programs;
+ The kernel, being:
	+ Everything below the syscall interface and above the physical hardware;
	+ It provides the filesystem, CPU scheduling, memory management, and other functions.
## General Approaches
### Layered
The OS is divided into a number of layers - or levels - each built on top of lower layers. The bottom layer - layer 0 - is the hardware. The highest layer - layer N - is the UI.
With modularity, layers are selected such that each uses functions and services of only lower-level layers.
This approach is fairly unrealistic, however.
### Monolithic
A **monolithic**, or "spaghetti nest" approach is achieved when everything is tangled up with everything else. This is more realistic given the size of an OS program.
### Microkernel
![[Microkernel.png]]
A **Microkernel** minimises the kernel as much as possible, moving as many kernel functions into user space as possible. This makes the kernel smaller, but adds a small performance overhead to user-kernel communication. Communication takes place between user modules via **message passing**.
[Mach](https://en.wikipedia.org/wiki/Mach_(kernel)) is an example of a microkernel, which Mac OS X is based off of.

