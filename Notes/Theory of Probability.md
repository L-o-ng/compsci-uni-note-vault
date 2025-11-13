#notes 

**Probability theory** is the formalisation of uncertain events. It enables one to infer probabilities of interest based on assumptions and observations. It fits alongside **statistics** - the practice of the science of collecting and analysing data.
## Terms
+ **Experiment** - a procedure that yields one of a given set of outcomes.
+ **Sample Space** - the set of possible outcomes of an *experiment*.
+ **Event** - any subset of the *sample space*.
## The Theory of Probability
>$S$ is a finite sample space of all outcomes; it is a set.
>Assume all outcomes are equally likely.
>$E$ is an event, also a set, where $E \subseteq S$.
>Then the probability of the occurrence of event $E$ is:$$P(E)=\frac{|E|}{|S|}$$
## Axioms of Probability
+ $P(E)$ is always between 0 and 1: $0\leq P(E)\leq 1$;
+ $P(S)=1$;
+ For disjoint events $E_{1},E_{2},\dots,E_{n}$ with no intersection: $$P(E_{1}\cup E_{2} \cup \dots \cup E_{n})=\sum_{i=1}^{n}P(E_{i})$$
Other principles are derived from the above axioms:
+ **Complement Rule**: $$P(\bar{E})=P(S-E)=P(S)-P(E)=1-P(E)$$
+ **Impossible Rule**: $$P(\emptyset)=0$$
+ **General Addition Rule**: $$P(E_{1} \cup E_{2})=P(E_{1})+P(E_{2})-P(E_{1} \cap E_{2})$$
+ If $E_{1} \subseteq E_{2}$ then $P(E_{1})\leq P(E_{2})$

