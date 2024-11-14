#notes 

Also see [[Timing]]

A **circuit** is a network that processes *discrete-valued* variables.

They have:
+ One or more discrete-valued input terminals.
+ One or more discrete-valued output terminals.
+ A specification of the relationship between inputs and outputs.
+ A specification of the delay between inputs changing and outputs responding.
## Elements and Nodes
A circuit is made up of **elements** and **nodes**.
+ An **element** is a circuit with inputs, outputs, and specifications.
+ A **node** is a wire joining *elements*, whose voltage conveys a discrete-valued variable.
## Combinational Logic
To design **very large** circuits, we must follow combinational logic rules:
+ **Individual** **gates** are combinational circuits.
+ Every circuit **element** must be a combinational circuit.
+ Every *node* is either an **input** to the circuit or connecting to **exactly 1 output** of a circuit element.
+ The circuit has **no cyclic paths**.
## Key Circuits
+ [[Adder]]
+ [[Subtractor]]
+ [[Decoder]]
+ [[Tristates]]
+ [[MUX]]
+ [[A Simple ALU]]
+ [[Problem Circuits]]
+ 
### Notes
Adders, decoders, and [[MUX|multiplexors]] are known as **combinatorial circuits**, meaning their output depends only on the current input.
[[Latches]] and [[Flip-Flops]] are called **sequential circuits**, as their output depends on *state* and *input* together.