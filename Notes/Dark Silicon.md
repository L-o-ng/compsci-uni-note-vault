#notes 
> [!definition] 
> The percentage of an integrated circuit's silicon are that cannot be powered on simultaneously at nominal frequency without exceeding the chip's TDP limit.

Transistor counts continued scaling with Moore's Law, but the stall in supply voltage $V_{dd}$ scaling due to subthreshold leakage caused chip power density to increase rapidly.

At deep nanometer nodes, as much as 50-80%+ of on-chip transistors must remain switched off - **dark** - or heavily throttled - **dim** - during peak execution.

Adding more identical general-purpose cores hits severe thermal throtling, yielding diminishing returns on parallel speedup ([[Amdahl's Law]] meets the *Power wall*).

We can spend our silicon area on heterogeneous cores and domain-specific accelerators that execute with 10x-100x better energy efficiency, and sleep when idle.

We can prevent hotspots and thermal runaway with power gating, dynamic voltage, frequency scaling, and thermally-aware scheduling.
## Consequences
+ **Extinction of Mega-Pipelining**: The pursuit of 30+ pipeline stages ceased immediately;
+ **Multicore Revolution**: Single-thread frequency gains stalled, architect pivoted to chip multiprocessors;
+ **EDP Metric**: Performance at any cost was replaced by MIPS/Watt, Joules per instruction, and clock/power-gating techniques;
+ **Heterogeneous/Domain-Specific Silicon**: Modern chips feature asymmetric core complexes, integrated vector units, neural engines, and hardware accelerators to bypass the utilisation wall.
