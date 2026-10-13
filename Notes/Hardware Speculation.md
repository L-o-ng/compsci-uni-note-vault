#notes 

Branches are a bottleneck for higher instruction-level parallelism in [[Tomasulo's Algorithm]]. We need solutions for control dependencies. One such solution is **Hardware Speculation**.

This combines three ideas:
+ [[Dynamic Branch Prediction]];
+ *Speculation*, to execute instructions before resolving a branch.
+ *Dynamic Scheduling*, to deal with scheduling different combinations of basic blocks.

We also need a mechanism for handling mis-speculation.
> [!important] 
> Essentially, we are executing out-of-order, but committing in-order. We must therefore introduce a [[Re-Order Buffer]].

![[Hardware Speculation.png]]
