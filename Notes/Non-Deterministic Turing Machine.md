#notes 

A **non-deterministic TM** has the transition function:
$$
\updelta:Q\times \Gamma \to \mathscr{P}(Q\times \Gamma \times \{ L,R \})
$$

The machine accepts an input if there exists a computation that ends into an accepting configuration.
>[!theorem]
>Every non-deterministic TM has an **equivalent** deterministic TM.
