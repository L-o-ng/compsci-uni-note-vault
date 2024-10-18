#notes 

A chip does not deal in 0s and 1s. The **voltages** are real numbers typically between 0V and 5V. 
0V can indicate 0, and 5V can indicate 1, but the chip needs to tolerate noise, as the voltage will not always be at these bounds.
## Supply Voltage
The **low** voltage in the system, connected to GND (ground), is 0V.
The **high** voltage is typically 5V, and is called $V_{DD}$ if unspecified.
More modern chips have moved to lower high voltages to save power and avoid overloading transistors.
## Logic Levels
The mapping of the continuous voltage measured at any point in the circuit to discrete 0 and 1 values is governed by defining [[Logic Levels]].
