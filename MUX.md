#definition

A **MUX**, or **Multiplexor**, chooses 1 of many inputs to *steer* to its *single output* under the direction of **control inputs**: the **selector**.
	If the input to a circuit can come from several places, for example, a *MUX* is one way to funnel the multiple sources selectively to the single input.

![[Multiplexor.png]]
A multiplexor has $k+2^k$ inputs and 1 output.
The first $k$ inputs - the selector $S$, represent a **binary number**.
The *output* takes the value of one of the remaining $2^k$ inputs: **the one indexed by the selector**.
## Using Tristate Buffers
[[Tristates]] can be used to simplify MUX design. 
### 2-to-1 Line Multiplexor
![[2 to 1 line multiplexor.png]]
### 4-to-1 Line Multiplexor
![[4 to one line multiplexor.png]]
## Combinational Logic with a Multiplexor
A MUX can be used to implement combinational logic functions.
An 8-input MUX can be used to implement functions in 3 variables: 
![[8 input mux.png]]
This design is uneconomic, however. We can reduce the truth table to only 4 rows by letting the output depend on $C$:
![[Economic MUX design.png]]
