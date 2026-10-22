#notes 

Consider the following sequences:
1. `ACGGT`;
2. `ACCGT`.

Each position of the alignment is either:
+ A character from each sequence;
+ A character from sequence 1 against a gap;
+ A character from sequence 2 against a gap.
## Recursive Process
Consider the **final** column of the alignment. We can:
+ End with a *match* $\begin{matrix}T  \\  T\end{matrix}$ and precede with all alignments of `ACGG`, `ACCG`;
+ End with a *deletion* $\begin{matrix}T  \\   -\end{matrix}$ and precede with all alignments of `ACGG`, `ACCG`;
+ End with an *insertion* $\begin{matrix}- \\  T\end{matrix}$ and precede with all alignments of `ACGG`, `ACCG`.

We obtain:
![[Recursive Programming for Sequence Alignment.png]]
This process is really bad because checking all alignments is extremely exponential.
See [[Dynamic Programming for Sequence Alignment]].
