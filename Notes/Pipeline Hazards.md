#notes 

> [!abstract] 
> There are situations in the pipeline when the nextinstruction cannot execute in the following cycle. Three types of hazards can take place:
> + **Structural Hazard**: Planned instruction cannot execute in proper clock cycle as the hardware does not support the combination of instructions set to execute;
> + **Data Hazard**: Execution stalls as data needed for execution is not yet available;
> + **Control Hazard**: An incorrect instruction has been fetched, which is not expected.

![[Pipeline Hazards.png]]
![[Pipeline Hazards-1.png]]
## Data Hazards
Consider the following instructions:
1. `add $r0, $r1, $r2`;
2. `sub $r3, $r2, $r0`.
![[Pipeline Hazards-2.png]]
We cannot proceed due to stalls/bubbles.
![[Pipeline Hazards-3.png]]
Using one feedback loop we can **forward** the result from ALU to ALU, avoiding a stall.
## Control Hazards
See also [[Branch Prediction]]
### Shuffling Operations
![[Pipeline Hazards-4.png]]
Consider the following instructions:
1. `add $r0, $r1, $r2`;
2. `beq $r3, $r4, #40`;
3. `lw  $r5, 200($r4)`;
4. `or  $r6, $r4, $r1 [Addr: #40]`;

![[Pipeline Hazards-5.png]]
We have 2 stalls (todo!)
#### Solutions
![[Pipeline Hazards-6.png]]
**From Before**: We can execute an instruction during the delay slot. 

![[Pipeline Hazards-7.png]]
**From Target**: todo!

![[Pipeline Hazards-8.png]]
**From Fall-Through**: todo!
