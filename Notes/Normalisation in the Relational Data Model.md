#notes 

Normalisation allows a database designer to identify a set of relations wit desirable properties for the given use case. So, there are:
+ A minimal number of attributes.
+ Attributes have a close, logical relationship.
+ Minimal redundancy.

This is an example of a *bottom-up* technique, but allows *validation* of top-down design.
## Top Down and Bottom Up
![[Top Down Bottom Up.png]]
### Top Down
The top-down approach results in an ER diagram.
1) Start from data requirements;
2) Produce a graphical description of the database;
3) Identify entities, their attributes, and their relations in the world.
### Bottom Up
The bottom-up approach results in normalisation.
1) Start with **actual data** in tables;
2) Analyse relationships amongst attributes;
3) Redesign the tables in a normalised way;
	1) This is difficult for large database, so needs formalisation.
## About Normalisation
Normalisation both:
+ minimises the required space;
+ avoids data anomalies.
In particular, it eliminates **data redundancy**, which is wasteful for storage space, and leads to *inconsistent* data.
See [[#Normalisation]].
### Redundancy
Data redundancy can appear in 2 forms: the first from **multi-valued attributes** in an ER model:
![[Data Redundancy Example 1.png]]
And the second from **attribute dependency**:
![[Data Redundancy Example 2.png]]
### Anomalies
There are 3 types of anomaly.
#### Insertion Anomaly
New records need to **duplicate existing data**.
You cannot add partial records.
#### Modification Anomaly
Modifying only one value can lead to data inconsistency.
#### Deletion Anomaly
Data may be lost as a side effect of deleting other data.
### Avoiding Anomalies
The best way to avoid data anomalies is to *decompose* tables into several sub-tables. So:
```
Student(__id__, prename, surname, college, collegeAddress)
```
decomposes to:
```
Student(__id__, prename, surname, college)
College(__college__, collegeAddress)
```
## Functional Dependencies
Choosing where to split tables to normalise the database depends on finding functional dependencies. In [[#Avoiding Anomalies|this example]], the functional dependency was `id -> college -> collegeAddress`.
To resolve these, we need to determine candidate keys, and which attributes to combine in the new tables.
### Formal Definition
>If $A,B$ are two sets of attributes in a relation, we say that:$$\array{B\text{ is functionally dependent on }A \quad (A \to B)\\\text{or that }A\text{ functionally determines }B}$$if each value of $A$ is associated with exactly one value of $B$.

This essentially means that if you know the value(s) of $A$ then you know the value(s) of $B$. Here, $A$ is called the **determinant** of $B$.
Note that $A,B$ are **sets** - they can consist of multiple attributes.

---

Functional dependencies have to hold at all times and for all possible instances of the relation. When searching for one, make sure to ask:
+ "Is this always the case?"
+ "Is there any chance this might ever *not* be the case?"
+ "Can I somehow *break* this?"
### Types of Dependency
#### Full Functional Dependency
$B$ is functionally dependent on $A$.
$B$ is **not** functionally dependent on any proper subset of $A$.
![[Full Functional Dependency.png]]
#### Partial Functional Dependency
$B$ is functionally dependent on $A$.
$B$ **remains** functionally dependent on **at least one** proper subset of $A$.
![[Partial Functional Dependency.png]]
#### Transitive Functional Dependency
If $A \to B$ and $B \to C$ then $C$ is transitively dependent on $A$ via $B$.
![[Transitive Functional Dependency.png]]
### Computing Functional Dependencies
Some functional dependencies are obvious from semantics; for example: `id -> (prename, surname)`. Some are less obvious.
#### Closures on Dependencies
>Given a set of functional dependencies $F$, its **closure** $F^{+}$ is the set of all functional dependencies that are implied by the dependencies in $F$.

There is a set of **inference rules** to compute $F^{+}$.
##### Armstrong's Axioms
These inference rules are all **sound** and **complete** - all dependencies can be derived and no additional "wrong" dependencies can be derived.
The former 3 are **Armstrong's Axioms**, and the latter can be derived from the former.

The **closure** $F^{+}$ of $F$ can be computed by:
1) Starting with all dependencies in $F$;
2) Repeatedly applying the axioms;
3) Add any new dependencies discovered in this way.
###### Reflexivity
If $B \subseteq A$, then $A \to B$.
```
(id, prename, surname) -> (prename, surname)
```
###### Augmentation
If $A \to B$, then $A,C \to B,C$.
```
(id, prename) -> (college, prename) [because id -> college]
```
###### Transitivity
If $A \to B$ and $B \to C$ then $A \to C$.
```
id -> collegeAddress [because id -> college, college -> collegeAddress]
```
###### Decomposition
If $A \to B,C$ then $A \to B$ and $A \to C$
###### Union
If $A \to B$ and $A \to C$ then $A \to B,C$
```
id -> (prename, surname) <=> id -> prename, id -> surname
```
###### Composition
If $A \to B$ and $C \to D$ then $A,C \to B,D$.
#### Algorithm for Computing $F^{+}$
```
fn cf
in F
op closure F+
	F+ <- F
	do:
		for every functional dependency f in F+:
			apply reflexivity, augmentation to f
			add functional dependencies to F+
		endfor
		for each pair f1, f2 of functional dependencies in F+:
			if f1, f2 imply an f3 by transitivity then
				add f3 to F+
			endif
		endfor
	while F+ does not change
```
## Normalisation
Normalisation is a multi-step process where each step produces a new **Normal Form**, which ensures certain properties for that form.
Forms include:
+ 1st Normal Form (1NF);
+ 2nd Normal Form (2NF);
+ 3rd Normal Form (3NF);
+ Boyce-Codd Normal Form (BCNF);
+ 4th Normal Form (4NF);
+ 5th Normal Form (5NF).
![[Normalisation Overall Method.png]]
### First Normal Form
A table is in 1NF if it has ==no repeating groups==.
A repeating group is an attribute, or group of attributes, with multiple values for a single occurrence of the primary key - a multi-valued attribute.
![[1NF Example.png]]
#### Methods
If there is a fixed number of repetitions, you can use separate attributes. If there are many repetitions, there are two general solutions. These methods do not eliminate redundancy yet.
##### Flattening
Fill empty cells with repeating values.
![[Flattening 1NF.png]]
##### Separate Relation
Create a new relation by adding a new table.
![[Separate Relation 1NF.png]]
### Second Normal Form
A table is in 2NF if it is in 1NF and has ==no partial functional dependencies==: every non-key attribute is [[#Full Functional Dependency|fully functionally dependent]] on the whole primary key.
2NF is only relevant for relations with composite keys.
#### Method
Determine dependencies and the primary key.
![[2NF Method 1.png]]
Then:
+ Remove the partially dependent attributes;
+ Place them in a new relation along with a copy of their determinant.
![[2NF Method 2.png]]
Note that redundancy is not yet eliminated.
### Third Normal Form
A table is in 3NF if it is in 2NF and has **no [[#Transitivity|transitive]] functional dependencies**.
#### Method
For any $A \to C$, there must not exist an attribute $B$ in-between:
![[3NF Method 1.png]]
For each transitively dependent attribute:
+ **Remove** the transitively dependent attribute;
+ Place them in a **new relation** along with a copy of their determinant.
![[3NF Method 2.png]]
