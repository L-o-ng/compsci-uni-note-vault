#topic 
## Notes
+ [[Tomasulo's Algorithm]]
+ [[Hardware Speculation]]
+ [[Re-Order Buffer]]
+ 

---

**Dynamic Scheduling** may generate an *imprecise exception*:
+ The pipeline may have *already* completed instructions that are later in program order than the instruction causing the exception;
+ The pipeline may have *not yet* completed some instructions that are earlier in program order than the instruction causing the exception.

> [!important] 
> To allow **out-of-order execution**, we split the [[Pipeline Hazards|ID]] pipeline stage into two:
> 1. **Issue**: Decode, check for structural hazards;
> 2. **Read**: Wait until no data hazards, then read operands.
