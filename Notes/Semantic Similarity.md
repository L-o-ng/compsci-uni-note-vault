#notes 

Consider the strings:
+ $T_{1}$: "Persuasive example of logical thinking about diagrams";
+ $T_{2}$: "Compelling illustration relating to rational cognition regarding visualisations";
+ $T_{3}$: "Some random discussion on blue cheese".

Here, despite the apparent similarity of $T_{1},T_{2}$, we obtain via [[Cosine Similarity]]:
$$
\operatorname{sim}_{\operatorname{cosine}}(T_{1},T_{2})=\operatorname{sim}_{\operatorname{cosine}}(T_{1},T_{3})=\operatorname{sim}_{\operatorname{cosine}}(T_{2},T_{3})=0
$$
One approach is to calculate similarity between tokens with a thesaurus.
Efficiency of solving this issue inspires the pursuit of [[Better Vector Representations]].
