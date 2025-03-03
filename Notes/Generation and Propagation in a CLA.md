#definition 

Via the rules of [[Binary Arithmetic#Rules|binary addition]] we can define 2 functions:
+ **Generate** - $G(A,B)=1$ if $A$ and $B$ would cause $C_{out}$ even if $C_{in}=0$
+ **Propagate** - $P(A,B)=1$ if $A$ and $B$ would cause $C_{out}$ if $C_{in}=1$
So, $$\begin{matrix}
G(A,B)=A\text{ AND }B  \\
P(A,B)=A\text{ OR }B
\end{matrix}$$