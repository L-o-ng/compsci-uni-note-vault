#definition 

In contrast to a normal **buffer**, which is either 1 or 0 at output, a tristate buffer can be electrically disconnected from the bus wire.
	This means it will have no effect on any other signals on the bus.

![[Tristate buffer.png]]
A single transistor *could* do the job, but there is a significant issue: **when the gate is on and input weak, the output would be weak as well**. A tristate buffer avoids this issue.
## Truth Table
![[Tristate buffer truth table.png]]
## Inverted Tristates
![[Inverted tristate.png]]

