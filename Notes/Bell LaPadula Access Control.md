#notes 

The **BLP** was designed by David Bell and Len LaPadula in 1973 and is considered as the most famous and influential security model. It was the first substantial effort to provide security to a *multi-user* operating system.

It focuses on **confidentiality** of information using a *tuple* $(S,O,A,L)$ where:
+ $S$ is a set of **subjects**;
+ $O$ is a set of **objects**;
+ $A=\{ \text{execute},\text{read},\text{write} \}$ is a set of **access operations**;
+ $L$ is a **lattice** of security levels with *partial ordering*.
## Intermediate Structure
A BLP is built upon 2 structures:
+ **Confidentiality Levels**: These denote seniority/importance, and have 4 levels: $\text{unclassified}<\text{confidential}<\text{secret}<\text{top secret}$;
+ **Need-to-know categories**: These denote the relevance - for example: NATO, Air, Sea, etc.

Subject clearance and object classification is done via a confidentiality level and a subset of categories.
## Lattice for Intuitive Security
![[BLP Lattice.png]]
## Simple Security
Simply, we could only allow users to read **down**. However, this means information could flow down too.
We can rectify this by only allowing users to *write up*.

