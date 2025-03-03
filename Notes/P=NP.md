#notes 
## NP
Many problems we would like to be efficiently solvable *are* efficiently checkable.
>The complexity class $\mathbf{NP}$, or non-deterministic polynomial time, consists of those decision problems that are efficiently checkable.
## P and NP
Suppose that some problem $X$ is in $\mathbf{P}$.
In order for $X$ to be in $\mathbf{NP}$, we need to show that it is efficiently checkable.
	That is, if given some potential witness for some instance, we can ascertain in polynomial time whether the witness verifies that the instance is a yes-instance.
Suppose that the actual witness we provide for any instance of $X$ is empty!
+ Even without any instance, because $X \in$ $\mathbf{P}$, we can decide in polynomial time whether any instance is a yes-instance.
+ So, trivially, $\mathbf{P}\subseteq \mathbf{NP}$.
However, this leads to probably the most fundamental open problem in computer science: $$
\text{Does }\mathbf{P}=\mathbf{NP}?
$$This is a Millennium Prize problem, and nets a $1000000 prize.
## The Boundary Between P and NP
Suppose we have 2 decision problems $X,Y$, and a polynomial time algorithm $a$ that:
+ takes an instance $I$ of $X$ as input and provides an instance $a(I)$ of $Y$ as output.
+ is such that an instance $I$ of $X$ is a yes-instance if and only if the instance $a(I)$ of $Y$ is a yes-instance.
So, essentially, $a$ quickly converts $X$ into $Y$.
>We call such an algorithm $a$ a **polynomial time reduction**, or **polynomial time transformation** of $X$ to $Y$ and we write $X \to_{\text{poly}}Y$
>	We say that $Y$ is a polynomial time reduction/transformation of $X$.
### NP-Completeness
Now suppose that there exists a problem $Y \in \mathbf{NP}$ with the property that:
+ for *any* problem $X \in \mathbf{NP}$ we have $X \to_{\text{poly}}Y$.
Such problems are called $\mathbf{NP}$-complete, although as yet, we don't know of any such problems even exist!
From the previous theorem,
+ If $Y \in \mathbf{P}$ then *every* problem $X \in \mathbf{NP}$ is also in $\mathbf{P}$: that is, $\mathbf{P}=\mathbf{NP}$.
>If $Y$ is an $\mathbf{NP}$-complete problem then $\mathbf{P}=\mathbf{NP}$ if and only if $Y \in \mathbf{P}$.

Essentially, all of the difficulty is encapsulated in the difficulty of *one* problem: 
	Is our $\mathbf{NP}$-complete problem in $\mathbf{P}$?
All we need to do now is to *find* an $\mathbf{NP}$-complete problem!
#### NP-Completeness in Other Problems
We can use the theory of $\mathbf{NP}$-completeness to tell us about other, non-decision problems.
	Consider [[The Travelling Salesman Problem]] - one of the [[Optimisation Problems]].
	Suppose we could solve it in polynomial time.
	Then we can easily solve the decision version in polynomial time.
	So, if we can solve the TSP in polynomial time, then $\mathbf{P}=\mathbf{NP}$.
	We call [[Search Problems]]/[[Optimisation Problems]] $\mathbf{NP}$-Hard if its solution in polynomial time would imply that $\mathbf{P}=\mathbf{NP}$.
## Dealing With NP-Hardness
The most obvious attack on an $\mathbf{NP}$-hard problem is a brute-force approach - generate all witnesses and pick the best.
However, this is naive - the number of tours of $n$ cities in the TSP is $n!$ - and $29!$ is greater than the number of instructions processed by an Intel i7 CPU started at the beginning of time!

Unfortunately, the best *exact* algorithm for the TSP is essentially brute force: we can generate all possible tours, and test each one as we generate it.
### Generating All Possible Outcomes
This can be done elegantly, typically via recursion.
### Heuristic Approaches
Nature can inspire heuristic methods - essentially, an algorithm that produces a good result in reasonable time.
#### Genetic Algorithms
Genetic algorithms:
+ Solve [[Optimisation Problems]].
+ Are based upon survival of the fittest.
	+ Start with a population of individuals.
	+ Each individual has some *fitness* which correlates with the solution quality.
	+ New populations are formed by individuals *breeding* - fitter individuals are more likely to be selected, and sometimes **crossover** and **mutation** are involved.
#### Ant Colony Optimisation
Ant Colony Optimisation, or ACO:
+ Deploys a set of agents called artificial ants to search for good solutions to [[Optimisation Problems]].
To apply ACO:
+ Transform the optimisation problem into the problem of finding the best path in a weighted graph.
+ The ants incrementally build a solution by moving in the graph.
+ The construction process is **stochastic** and biased by a pheromone model.
	+ Popular paths will have high pheromone levels and so will attract more ants who will leave yet more pheromone.
	+ Paths that are not used will have their pheromone evaporate.
