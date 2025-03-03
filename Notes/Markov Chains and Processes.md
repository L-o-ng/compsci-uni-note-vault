#notes 

We can think of the [[PageRank]] surfer as a **Markov Process**.
+ It jumps randomly from state to state.
+ The probability of jumping depending only on the current state.
+ The PageRank is the *steady state probability* of being on a page.
## An Example: Weather
>The weather tomorrow will be the same as today.

This is about 70% accurate.
### As a Markov Process
1) We can look at the history of weather in the place.
2) Then, work out the transition probabilities between states.
3) Then, write transitions as a matrix $T$.
4) Then, write the weather today as a *sparse* vector $\mathbf{w}_{0}$.
5) Now, $\mathbf{w}_{1}=T\mathbf{w}_{0}$.
6) So, the weather in $n$ days' time is probably $\mathbf{w}_{n}=T^n\mathbf{w}_{0}$.
## Usage
+ Can be used to generate musical chord sequences, or indeed complete songs.

