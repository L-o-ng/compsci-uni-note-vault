#definition 

**Amdahl's Law** identifies the performance gain from adding additional cores to an application with both serial and parallel components.
$$
\text{speedup}\leq \frac{1}{S+ \frac{1-S}{N}}
$$
+ $S$ is the serial portion as a percentage;
+ $N$ is the number of processing cores.
## Example
If an application is 75% parallel and 25% serial, moving from 1 core to 2 results in a 1.6x speedup.
As $N \to \infty,\space \text{speedup} \to \frac{1}{S}$.
