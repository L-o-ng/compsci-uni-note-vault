#notes 

> [!abstract] 
> **Multiversion Timestamps** are another generalisation of the [[Timestamping]] protocol.
> + Many transactions can **simultaneously** access an item $x$;
> + Each version works on a different *version* of $x$;
> + Versions are then *labelled* by *timestamps*;
> + We can increase concurrency as a result.
>
> A write operation creates a new version of $x$ or aborts and restarts.
> A read operation selects the appropriate version of $x$ and is always successful.
## Methodology
A data item $x$ has a sequence of versions $\langle x_{1},x_{2},\dots,x_{m}\rangle$.
Each version $x_{k}$ contains:
+ **Content**: the value of $x_{k}$;
+ **$WTS(x_{k})$**: the *write timestamp* - the timestamp of the *transaction* that created version $x_{k}$;
+ **$RTS(x_{k})$**: the *read timestamp* - the largest timestamp of a transaction that has read version $x_{k}$.

When $T$ creates a new version $x_{k}$ of $x$, $WTS(x_{k}),RTS(x_{k})$ are initialised to $TS(T)$. Then, $RTS(x_{k})$ is updated whenever $T$ reads $x_{k}$ and $TS(T)>RTS(x_{k})$.

Versions can also be deleted if no longer required. To determine if $x$ is required:
1. Find the timestamp $TS(T)$ of the **oldest** *alive* transaction;
2. For any two versions $x_{i},x_{j}$ of $x$: if $WTS(x_{i}),WTS(x_{j})<TS(T)$ then delete the oldest of the two versions.

This keeps only one version that is older than $TS(T)$, just in case $T$ needs to roll back.
### Logic
Consider a transaction $T$:
+ Let $x_{k}$ be the version where $WTS(x_{k})$ is the largest **write** timestamp that is $\leq TS(T)$;
+ $T$ issues a `write(x)`:
	+ If $TS(T)<RTS(x_{k})$ then $T$ is rolled back;
		+ Otherwise the transaction that has last read version $x_{k}$ will never see the update of $T$ so no serialisability.
	+ If $TS(T)\geq RTS(x_{k})$ then:
		+ If $TS(T) = WTS(x_{k})$ the contents of $x_{k}$ are **overwritten** - $x_{k}$ was created previously by the same transaction $T$.
		+ If $TS(T)>WTS(x_{k})$ then a new version of $x$ is created.

