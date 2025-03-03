#notes 

Suppose we design a complex system, containing many components each using software.
We also have requirements on how the system should function; for example:
+ Safety;
+ Reliability;
+ Security;
+ Availability;
+ Absence of deadlocks; 
+ etc.

SAT-Solving allows us to ensure the system satisfies these requirements.
## Example
![[SAT-Solving Motivation Circuit Example.png]]
Consider the above circuit. We use this circuit, $C_{1}$ in a processor and consider replacing it with $C_{2}$, for some reason relating to improvement.
We first want to ensure $C_{2}$ is **correct**; that is, that it will behave according to some specification. If we know $C_{1}$ is correct, then it is enough to *prove* that $C_{2}$ is functionally equivalent.
### Establishing Correctness
Consider the system as a mathematical object. We will need to build a formal model of the system.
Next, find a formal language for expressing the intended properties.
The language must have *semantics* to explain which models satisfy properties expressible in the language.
Next, write a **specification**; that is, the intended properties of the system in this language.
Finally, formally prove that the system model is also a model of the specification.
Naturally, [[Logic]] is a good foundation for this.