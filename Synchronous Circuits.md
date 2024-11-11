#definition

Synchronous sequential circuits consist of interconnected elements such that: 
+ Every circuit element is either a **combinational circuit** or **register**.
+ At least **one** element is a register.
+ All registers receive the **same** clock signal.
+ Every **cyclic path** contains at least **one** register.
They have: 
+ A discrete set of **states** $\{ S_{0},\dots,S_{k-1} \}$
+ A clock input, whose rising edge indicates when a state change occurs.
+ A functional specification which details the next state and all outputs for each possible current state and set of inputs.