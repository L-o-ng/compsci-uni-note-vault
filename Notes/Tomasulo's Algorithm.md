#notes 

> [!abstract] 
> **Tomasulo's Algorithm** is an architectural hardware algorithm for dynamic instruction scheduling that allows out-of-order execution. It:
> + Prevents registers being bottlenecks;
> + Avoids WAR, WAW hazards of Scoreboard;
> + Allows loop unrolling in hardware;
> + Not limited to basing blocks.

![[Tomasulo's Algorithm.png]]
## Components and Flags
+ `Op`: Operation to perform in the unit - for example, `+, -`;
+ `Qj, Qk`: Reservation stations producing source registers;
+ `Vj, Vk`: Value of source operands;
+ `Rj, Rk`: Ready flags for `Vj, Vk`;
+ `Busy`: Flag indicating whether the reservation station and FU are busy;
+ **Register Result Status**: Indicates which functional unit will write each register, if one exists. Blank when there are no pending instructions which will write that register.
## Stages
1. **Issue**: Get the instruction from FP `Op` queue. If the reservation station is free, the scoreboard issues `instr` and sends the operands. We can rename registers here;
2. **Execution**: Operate on the operands. When both are ready, we execute. If not, we watch the CDB for the result;
3. **Write**. We write on the CDB to all awaiting units and mark the reservation station as available.

