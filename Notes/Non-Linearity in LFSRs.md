#notes 

See first: [[Linear-Feedback Shift Registers]].

In order to address the [[Building a Stream Cipher with LFSRs|Issues with LFSRs]], we need to introduce some element of non-linearity:
## Options
### Nonlinear Feedback Function
The first option is to replace the linear feedback function with some nonlinear function $g$, where the output of $g$ is $0,1$ with probability roughly $\frac{1}{2}$ over the inputs. This is then known as an FSR.
### Nonlinear Output
Rather than the output being the rightmost bit, the output could be some nonlinear function of the entire register.
### Nonlinear Combiner
An alternative is to run several LFSRs in parallel and combine them in a nonlinear fashion. They do not need to have the same degree.
## Warning
The nonlinear function needs to always be **balanced**. Consider the nonlinear combiner $a\wedge b\wedge c$ where $a,b,c$ are outputs of three LFSRs: this will output 0 about $\frac{7}{8}$ of the time.
## Examples
### Trivium
![[Non-Linearity in LSFRs.png]]
### Salsa, ChaCha
![[Non-Linearity in LSFRs-1.png]]
