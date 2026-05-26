#notes 

> [!abstract] 
> A **saga** is an ordered sequence of **flat** transactions that can be interleaved with each other.
> For every sub-transaction $T_{i}$ there is a **compensating** transaction $C_{i}$ which undoes the effects of $T_{i}$.

The effects of the *saga* $T_{1},T_{2},\dots,T_{n}$ are:
+ $T_{1},T_{2},\dots,T_{n}$ if it completes;
+ $T_{1},T_{2},\dots,T_{i},C_{i},C_{i-1},\dots,C_{1}$ if the sub-transaction $T_{i}$ aborts.

In contrast to flat transactions, *sagas*:
+ Relax the [[Transactions#Isolation]] property;
+ Reveal partial results to other transactions before they complete.

Sagas are generally useful when sub-transactions are relatively independent, and compensating transactions can be produced. They are not always easy: consider dispensing cash from an ATM.
