#notes 

See first: [[Entity Relationship Modelling]]

The basic concepts of the ER model are adequate for building data models in traditional databases. They become **limiting**, however, when modelling *modern* and *complex* databases with large amounts of data.

The **Enhanced ER Model** (EER Model) adds *semantic* modelling concepts: *specialisation*, and *generalisation*.

This allows us to:
+ Avoid describing similar concepts more than once;
+ Have relations that include a subclass but not the superclass;
+ Have more semantic information to the design:
## Terminology
+ **Subclass** - A subgrouping of occurrences of an entity type, which requires to be represented separately;
+ **Superclass** - An entity type that has two or more distinct *subclasses*;
	+ Each member of a subclass is also a member of the superclass;
+ **Attribute Inheritance** - All attributes of the superclass are also attributes of the subclasses. A subclass has *additional* attributes;
+ **Type Hierarchy** - An entity with its subclasses and their subclasses:
	+ **Specialisation Hierarchy** - A *manager* is a specialisation of *staff*;
	+ **Generalisation Hierarchy** - *Staff* is a generalisation of a *manager*;
	+ **IS-A Hierarchy** - A *manager* IS-A (member of) *staff*;
+ **Specialisation** - The *top-down* process of maximising the differences between entity occurrences, by identifying their *distinguishing* characteristics. Given *superclasses*, it leads to identifying *subclasses*;
+ **Generalisation** - The *bottom-up* process of minimising the differences between entity occurrences, by identifying their *common* characteristics. Given subclasses, it leads to identifying *superclasses*.
## Diagrammatic Representation
![[Enhanced Entity Relationship Modelling 1.png]]
![[Enhanced Entity Relationship Modelling 2.png]]
Note how subclasses are attached by a line that points with a **triangle** to the superclass.
### Constraints
**Participation Constraint**:
+ Determines whether *every* member in the superclass must participate as a member of a subclass or not;
+ Can be `mandatory` or `optional`.

**Disjoint Constraint**:
+ Determines whether a member of a superclass can be a member of *one or more* subclasses;
+ This only applies in cases of *at least two* subclasses:
	+ `or` - *disjoint*: it can belong to **only one** subclass;
	+ `and` - *non-disjoint*: it can belong to *more than one subclass*

Note how we write the values of constraints as labels below the triangle.
![[Enhanced Entity Relationship Modelling 3.png]]
