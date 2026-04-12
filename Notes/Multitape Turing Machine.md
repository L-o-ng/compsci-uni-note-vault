#notes 

A multitape TM is like an ordinary TM with several tapes, each with its own head. The only formal definition is the transition function, which becomes:
$$
\updelta:Q\times \Gamma^{k}\to Q\times \Gamma^{k}\times \{ L,R \}^{k}
$$
where $k$ is the number of tapes
>[!theorem]
>Every multitape TM has an **equivalent** single tape TM.

