#notes 

>A language is regular if and only if some [[Regular Expressions|Regular Expression]] describes it.
## Proof
Given a RE $R$, we construct an NFA that recognises $L(R)$. This is easy by structural induction:
+ Base Case: All initial REs can be implemented by NFAs;
+ Inductive Step: Closure under regular operations is [[Regular Operations#Closure|proven]].

Therefore, given a DFA $M$, we can construct a RE that recognises $L(M)$. This is however not so easy.
![[Regular Expression to DFA.png]]
