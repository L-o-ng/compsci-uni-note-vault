#notes 

## Problem 1
![[Problem Circuit 1.png]]
Consider this circuit with gate delay 1ns.
+ How does this circuit behave?
	+ Suppose X=0: then Y=1 and Z=0, so X=1!
	+ X rises to 1, at 1ns Y falls, at 2ns Z rises, and at 3 ns X falls.
This results in an **unstable** or **astable** circuit.
![[Problem Circuit 1 Timing Diagram.png]]
## Problem 2
![[Problem Circuit 2.png]]
This circuit looks like an improved [[Latches#D Latch|D Latch]], as it uses fewer gates and so fewer transistors.
However, it leads to **race conditions**. The behaviour depends on which of two routes through the circuit carries signal the fastest.
+ Logically identical circuits may exhibit different behaviour depending on technicalities of the gate construction, or may exhibit odd behaviours when external factors like heat are applied.
## Solving These Problems
These problems are caused by outputs feeding back into inputs, causing the circuits to contain **loops** or **cyclic paths**.
We can insert **registers** into cyclic paths to eliminate *race conditions*:
+ The registers contain the state of the circuit.
+ They break the paths.
+ They only update on a clock edge.
+ I.e they are **synchronised** to the clock.
If the clock signal is **sufficiently slow**, so that all inputs to all the registers have settled before the next clock edge, then race conditions cannot arise.