#notes 

>[!definition]
>The **time complexity** of a non-deterministic Turing machine $NT$ is the function $\operatorname{NTime}_{NT}$ such that $\operatorname{NTime}_{NT}(x)$ is the number of steps in the shortest path of $NT(x)$ if there is one; otherwise it is the number of steps in the shortest rejecting path.
>If not all paths halt, then the function is undefined.

>[!definition]
>For any function $f$, we say that the **non-deterministic time complexity** of a [[Turing Languages|decidable]] language $\cal L$ is $O(f)$ if there exists a [[Non-Deterministic Turing Machine]] $NT$ which decides $\cal L$, and constants $n_{0}$ and $c$ such that for all inputs $x$ with $|x|>n_{0}$:
>$$\operatorname{Ntime}_{NT}(x)\leq c \cdot f(|x|)$$

>[!definition]
>The **non-deterministic** time complexity *class* $NTIME[f]$ is defined to be the *class* of all **problems** (ie. languages) for which there exists an *algorithm* with non-deterministic time complexity in $O(f)$.

