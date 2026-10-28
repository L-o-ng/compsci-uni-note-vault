#notes 

A **Linear-Feedback Shift Register**, or (*LFSR*), is a building block for constructing a PRG, as they are efficient to implement in hardware and generate outputs that have good statistical properties.

An LFSR consists of $n$ **memory cells** $(s_{0},\dots,s_{n-1})$ each containing 1 bit of data; the bank of all $n$ cells being the **register**; and a **feedback function** defined by a set of $n$ boolean **feedback coefficients** $c_{0},\dots,c_{n-1}$. 

The *feedback function* XORs together a subset of the memory cells based on the feedback coefficients. The LFSR starts with an initial state at time $t=0$: when $t$ is incremented, the value in $s_{0}^{(t)}$ is output. As $t$ increments, all the values in the memory cells are moved dow one and $s_{n-1}^{(t+1)}$ is generated using the feedback function.
More formally, the state at time $t+1$ is defined from time $t$ as:
$$
\LARGE
\begin{matrix*}[l]
s_{i}^{(t+1)}\leftarrow s_{i+1}^{(t)}, & i \in [0, \dots, n - 2] \\
s_{n-1}^{(t+1)}\leftarrow \bigoplus_{j=0}^{n-1}c_{j}s_{j}^{(t)}.
\end{matrix*}
$$
As the feedback function only generates the new value for $s_{n-1}$, the first $n$ output bits of the LFSR will be exactly the input.
## Example
Consider the degree-4 LFSR defined by the coefficients: $c_{0}=1,c_{1}=1,c_{2}=0,c_{3}=0$. As the time increments, the value for $s_{3}^{(t+1)}$ will be $s_{0}^{(t)}\oplus s_{1}^{(t)}$. Let the initial state be $(s_{3},s_{2},s_{1},s_{0})=(0,1,1,0)$. Then, the states for each time step will be:
$$
\begin{matrix}
t=0 & s=(0,1,1,0) \\
t=1 & s=(1,0,1,1) \\
t=2 & s=(0,1,0,1) \\
t=3 & s=(1,0,1,0) \\
t=4 & s=(1,1,0,1) \\
t=5 & s=(1,1,1,0) \\
t=6 & s=(1,1,1,1) \\
t=7 & s=(0,1,1,1) \\
t=8 & s=(0,0,1,1)
\end{matrix}
$$
## Output Length
A degree-$n$ LFSR has $2^{n}$ possible states. If the state of the LFSR is ever the all-0 vector, then it will remain in that state forever. If it never hits the all-0 vector, then it will always cycle periodically.

> [!definition] 
> An LFSR is said to be of **maximum length** if it cycles through all $2^{n}-1$ states before repeating. This is dependent entirely on the feedback coefficients, which you can choose to ensure this (the polynomial defined by the coefficients must be primitive).


