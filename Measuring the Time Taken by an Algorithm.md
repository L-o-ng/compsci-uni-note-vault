#notes 

We have a problem: we don't have a *formal* definition of [[Pseudo-code]].
This makes a *formal* definition of time taken impossible.
However, the analysis of algorithms is *purposefully* never precise. The whole approach allows us to work around irrelevant details.
## The Fundamental Assumption
>Variables can be manipulated in a small, fixed number $c$ units of time, as can basic operations involving variables.
>	The actual value of $c$ is reflective upon the actual processor upon which the algorithm is eventually implemented and executed.
>	Basic list components are treated in the same way as variables.
### In General
**Any** basic algorithm operation can be undertaken in at most $c$ units of time.
+ For example, `x=A[pass]`; `pass < n`; `swap x and A[i]` = $3c$ units of time.
+ `output A` is **not** basic: $cn$ units of time, as it depends on input.
We assume input numbers, etc., are always small enough to be dealt with by any processor.
## Selection Sort as an Example
See [[Selection Sort]].
Suppose the input list is `[4,3,6,5]`. We can trace selection sort, finding the total time to be $48c$ units of time. Note that the cost of following the control flow is 0 by assumption.
