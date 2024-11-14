#notes 

In any physical gate or circuit, there is a **delay** between the *input changing* and the *output adjusting*.

We can break this delay down into a **lower bound** and an **upper bound**:
+ Contamination Delay, $t_{cd}$ is the minimum delay before the output changes.
+ Propagation Delay, $t_{pd}$ is the maximum delay before the output is stable.

![[Timing Graphical Example.png]]
## Causes
+ **Capacitance** and **resistance** in a circuit.
+ The speed of light limitation.

## Why $\mathbf{t_{pd}}$ and $\mathbf{t_{cd}}$ are Different
1) They have different rising and falling delays.
2) A circuit may have multiple inputs and outputs, some of which are faster than others.
3) Circuits slow down when hot and speed up when cold.
## Critical Paths
In a circuit, the **critical path** is the path determining the *propagation delay* of the circuit.
	In other words, it is the longest path in the circuit: $$t_{pd}=2t_{pd\textunderscore AND} +t_{pd \textunderscore OR}$$
The **short path** is the path determining the *contamination delay* of the circuit.
	It is the shortest path in the circuit: $$t_{cd}=t_{cd \textunderscore AND}$$
## Gate Delay
As well as slowing down the operation of logic circuits, gate delay can also create **hazards** or **glitches** at the output. These manifest as unwanted brief logic level changes at the output in response to changing inputs.
They are classified into 2 types:
+ **Static** - The output undergoes a momentary transition when one input changes when it was supposed to remain unchanged.
+ **Dynamic** - The output changes more than once when it was supposed to change just once.
## Timing Diagrams
A **timing diagram** can visually represent a *hazard*.
They show the ==logical value of a signal as a function of time==.
They do however make some simplifying assumptions:
+ The signal has only 2 levels: 0 and 1.
+ The transition between logic levels is instantaneous.
![[Timing Diagram example.png]]
### Examples of Static and Dynamic Hazards
![[Timing diagram hazards example.png]]
### Example in a Multiplexor
See [[MUX]] for more information.
![[Timing in MUX.png]]
## Hazard Removal
A static hazard is visible in the [[Karnaugh Maps|K-map]] of the output.
It can hence be removed by covering the adjacent prime implicants by a redundant circle ==to eliminate the dependency on the variable causing the hazard==.
+ To eliminate a 1 hazard, draw the K-map of the output. The 1 hazard will occur when 2 adjacent 1s are not covered by the same circle. Add another term (circle) which overlaps the essential terms.
+ To remove a 0 hazard, draw the K-map of the complement of the output. Add another term (circle) which overlaps the essential terms; then consider the complement of that term and add it to the original circuit.
### Examples
#### Removing a 1
![[Static 1 hazard removal.png]]
## The Dynamic Discipline
The **Dynamic Discipline** restricts us to using circuits satisfying timing constraints that allow us to combine components.
>$t_{\text{setup}}$ is the time before the rising edge during which the inputs **must** be stable.
>$t_{\text{hold}}$ is the time after the rising edge during which the inputs **must** be stable.
>$t_{\text{ccq}}$ is the time until output starts to change.
>$t_{\text{pcq}}$ is the time by which the output has stabilised.

![[Dynamic Discipline.png]]
With these constraints we can think of signals as discrete in time as well as logic.
### Setting Time
![[Setting Time under the Dynamic Discipline.png]]
Rearranging the bottom equation we find that: $$t_{\text{pd}}<T_{\text{c}}-(t_{\text{pcq}}+t_{\text{setup}})$$
The bracketed expression is called the **sequencing overhead**.
The clock speed and sequencing overhead are normally fixed, and the designer must work with them.
Designers must get all elements of [[Circuits and Combinational Logic|Combinational Logic]] to work within the bound on $t_{\text{pd}}$ in order for the circuit to be reliable.
![[Minimum Delay.png]]
There is also a **minimum delay** requirement:
+ D2 must hold its value for at least $t_{\text{hold}}$ time after the rising edge.
+ It could change as soon as $t_{\text{ccq}}+t_{\text{cd}}$
+ Designers have a **min-delay constant**: $$t_{\text{ccq}}+t_{\text{cd}}>t_{\text{hold}}\implies t_{\text{cd}} > t_{\text{hold}}-t_{\text{ccq}}$$
+ Often in order to allow direct connection of [[Flip-Flops]], $t_{\text{hold}}<t_{\text{ccq}}$, so the *min-delay constant* isn't technically an issue.
#### Example
![[Min-Delay Constant Example.png]]
![[Min-Delay Constant Example Fixed.png]]
## Pipelining
This is a method of increasing the clock frequency.
![[Pipelining 1.png]]
![[Pipelining 2.png]]
![[Pipelining 3.png]]
