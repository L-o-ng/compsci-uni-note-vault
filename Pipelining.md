#notes 

Consider the [[Computation in a Simple Processor#Fetch, Decode, Fetch, Execute|fetch decode execute cycle]]. Instructions can, and often do, take more than one step. What if parts of the cycle/consecutive cycles could be done in parallel?
+ We can create separate fetch and execute units to allow them to operate in parallel.
+ This gives rise to **pipelining**, the *assembly line* approach - have separate execution units for different types of instructions to allow parallel execution of unrelated instructions.
## On an LMC
See [[Little Minion Computer]] for more information.
Having separate fetch/execute units can be though of as giving the little minion an assistant:
+ The assistant goes back and forth between the PC and mailboxes, fetching the instructions in order.
+ It decodes each one.
+ The little minion executes all the instructions.
If the assistant can feed decoded instructions to the little minion at the speed it can execute them, we save a lot of time.
## In Practice
A separate fetch unit is linked to the execution unit by buses.
One instruction is processed at a time, while the next few are fetched. The decode unit within the fetch unit identifies the opcode and instruction format, and hence the addresses of the operands.
This information is passed to the execution unit which reads/writes the operands and liaises with the ALU.

This allows the computer to start the next cycle before the current one has finished.
## At the Instruction Level
Can we do the same for instructions? I.e: if instructions take several steps, can we move the next instruction into that step as soon as the instruction before has finished it?
![[Pipelining.png]]
This is the essence of *pipelining*.
**Scalar Processing** - An individual instruction takes the same amount of time as before; the average instruction throughput is roughly equal to the clock speed of the CPU.
However, problems can arise from this type of processing:
+ **Stalling** - Waiting for prior results to become available.
+ **Branching** - At a branch, we do not know what the next instruction is.
### Solving Branching Problems
+ Have a separate pipeline for both possibilities.
	+ Work on both outcomes until the branch is resolved.
+ Use a probabilistic approach.
	+ Predict the branch outcome based on previous visits or programmer hint.
+ Requiring the following instruction to be independent of the branch.
	+ This can also be used to avoid stalling: Following a write to memory, do not allow read from that location for a few steps.
+ Reorder instructions.
	+ Analyse instructions coming up and do the ones independent of the current pipeline first.
## Superscalar Processing
If the computer is given *specialist units* for different types of instruction execution (for example, a load/store unit), with several units for common instructions, each unit can have a pipeline. If they are all filled, the overall processor can execute **more than one** instruction per clock cycle.
This is called superscalar processing, and on modern CPUs, can increase instruction throughput by 5 times.
![[Superscalar Processing.png]]
### Complexities
+ Instructions may complete in the wrong order.
+ Dependencies on prior results may be lost.
+ Branch instructions must be resolved correctly.
+ Conflict for CPU resources, like registers, arise.
Resolving these issues requires additional CPU complexity and a burden on the programmer.