#notes 

First, see [[Quick Sort]].

If the partition creates a balanced split then the algorithm is $\Theta(n\log n)$.
If it is extremely unbalanced, then it is $\Theta(n^2)$ instead.
## A Constant Example
Suppose every pivot splits its problem in a $2:13$ ratio; that is, $n$ spawns sub-problems of size $\frac{2}{15}n$ and $\frac{13}{15}n$. The recurrence would then be: $$
T(n)=T\left( \frac{2}{15}n \right)+T\left( \frac{13}{15}n \right)+cn
$$
for some constant $c\geq 1$.
### Recursion Tree
There now must be: 
+ A **short** branch: $$
n \to \frac{2}{15}n \to \left( \frac{2}{15} \right)^2n \to \left( \frac{2}{15} \right)^3n \to \dots \to 1
$$
+ A **long** branch: $$
n \to \frac{13}{15}n \to \left( \frac{13}{15} \right)^2n \to \left( \frac{13}{15} \right)^3n \to \dots \to 1
$$
+ All other branches mix $\frac{2}{15}$ and $\frac{13}{15}$ and therefore are somewhere in-between.

The question now appears to be: for what $x$ have we got $$
\left( \frac{13}{15} \right)^x \cdot n\leq 1\space?
$$
#### The Answer
$$
\left( \frac{13}{15} \right)^x\cdot n\leq 1 \iff \left( \frac{13}{15} \right)^x \leq \frac{1}{n} \iff \left( \frac{15}{13} \right)^x \geq n
$$Taking logarithms on both sides, $$
x\log_{2}\left( \frac{15}{13} \right)\geq \log_{2}n \iff x\geq \frac{\log_{2}n}{\log_{2}\left( \frac{15}{13} \right)}=\Theta (\log_{2}n)
$$In each partitioning of $\leq cn$, there is overall work $O(n\log n)$, ==whenever all splits are proportional with constant ratios.==
## Randomisation
In algorithm design, randomisation is used to eliminate bad input sequences.
Randomised Quick Sort (RQS) functions the same as quicksort, with one key difference:
	In each call to the partition function, pick the pivot uniformly at random from all candidates.
The hope is that most of the time, reasonably good splits are produced.
### Analysis
If $X$ is a random variable that denotes the number of comparisons during a run of RQS, then $$
\Bbb{E}[X]=O(n\log n)
$$
#### Proof
Selection of a random pivot splits an input of size $n$ into 2 sub-problems, SMALL, and LARGE, of sizes $0$ and $n-1$, or $1$ and $n-1$, or $\dots$ or $n-1$ and $0$. Each of these outcomes is equally likely. So, with $T(n)$ being the expected number of comparisons, $$
\eqalign{
T(n) &= (n-1)+ \underbrace{\frac{1}{n}\cdot\left[ \sum_{i=0}^{n-1}(T(i)+T(n-i-1)) \right]}_{\text{Average over splits}} \\
&= (n-1)+ \frac{1}{n} \cdot \left[ \sum_{i=0}^{n-1}T(i)+\sum_{i=0}^{n-1}T(n-i-1) \right] \\
&=(n-1)+ \frac{1}{n}\cdot\left[ \sum_{i=0}^{n-1}T(i)+\sum_{i=0}^{n-1}T(i) \right] \\
&=(n-1)+\frac{2}{n}\cdot \sum_{i=0}^{n-1}T(i)
}
$$
Using the [[Induction#Guessing|guess and verify method]], since most splits will be fairly close to the median, we can say intuitively $O(n\log n)$, like [[Merge Sort]]. Since the function is a sum, we can upper-bound it with an integral like so:$$
\sum_{i=1}^{n-1}f(i)\leq \int_{1}^n f(x)dx
$$For us, $$
\int_{1}^n(cx\ln x)dx=\left[ \frac{c}{2}x^2\ln x-\frac{c}{4}x^2 \right]\Bigg|_{1}^n=\left( \frac{c}{2} \right)n^2\ln n-\frac{cn^2}{4}+\frac{c}{4}
$$By guessing, $T(i)\leq ci\ln i\text{ for }i\leq n-1$:
The base case works.
The recursive case: $$
\eqalign{
T(n)&\leq(n-1)+\frac{2}{n}\sum_{i=1}^{n-1}(ci\ln i) \\
&\leq(n-1)+\frac{2}{n}\int_{1}^n(cx\ln x)dx \\
&\leq(n-1)+\frac{2}{n}\left( \left( \frac{c}{2} \right)n^2\ln n-\frac{cn^2}{4}+\frac{c}{4} \right) \\
&\leq cn\ln n\text{ for }c=2
}
$$
Note that:
+ This is the same as basic quick sort on a randomly shuffled input, implying that basic quick sort's average-case runtime is $O(n\log n)$.
+ We can show with a high probability that if $X$ is actual running time, and $T(n)$ is expected, then $P(X>(1+\updelta)T(n))\leq \frac{1}{n^\alpha}$ for some constants $\updelta,\alpha\geq 1$.
