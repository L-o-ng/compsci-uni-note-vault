#notes 
## Workload Traces
### Biased Loops
Consider an 8-iteration loop: `T,T,T,T,T,T,T,NT`:
+ **1-bit Predictor**: Mispredicts twice (last iteration, next entry into loop);
+ **2-bit Predictor**: Drops to 1 misprediction perloop once a steady state is reached.
### Alternating Patterns
Consider a pattern: `T,NT,T,NT,T,NT,...`: here, a **2-bit Predictor** fails with 0% accuracy. We can use a correlating predictor, or observing global history.
### Aliasing
+ Multiple branch PCs index into the same table slot when index bits are constrained;
+ Different branches with conflicting tendencies thrash shared counter states.
## Hardware Cost
Direction Tables (BHTs) are exceptionally cheap per entry.
Target Buffers (BTBs) require more silicon area due to 32/64-bit target storage and tag verification.

