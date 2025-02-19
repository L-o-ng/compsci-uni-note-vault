#notes 

![[ER Modelling.png]]

ER Modelling is a model for *communication*.
It is: 
+ Non-technical;
+ Free of ambiguities.
It mainly uses UML - Unified Modelling Language.
## Components
There are: 
+ **Entities** with **Attributes**;
+ **Relationships** between entities;
+ **Constraints** on the above.
It is an example of a *top-down* approach to database design.
### Entities
An entity is a "thing" that should be explicitly represented. It is represented in an ER diagram as a labelled **rectangle**.
+ **Type** - a class of all objects with the same properties;
+ **Occurrence** - a concrete instance of an entity type.
### Relationship
A relationship is a named association between two or more entity types.
They are represented on an ER diagram as a labelled line, typically joining entities, with a triangle indicating the reading direction.
**Constraints** can act on the number of entity occurrences that can participate in a relationship.
#### Constraints, Cardinality, and Participation
Consider the following example:
![[Example ER Diagram.png]]
##### Constraints
Constraints tend to be a range: `min..max`, but could also be a set: `0, 1-5, 10, ...`
`*` means no constraint, or infinity.
##### Cardinality
+ one-to-one (1:1) -> "is head of"
+ one-to-many (1:\*) -> "gives"
+ many-to-many (\*:\*) -> "attends"
##### Participation
+ Optional (0) -> "giving a course" is optional for a teacher.
+ Mandatory (1) -> "attending a course" is mandatory for a student.
### Attributes
An attribute is a property of an entity type.
Attributes are listed in the lower section of an entity rectangle, with the primary key underlined.
#### Simple Attribute
A simple attribute has a single component.
#### Composite Attribute
A composite attribute has multiple components, which are indented under the attribute name.
#### Single-Valued Attribute
A single-valued attribute has only one value for each entity occurrence.
#### Multi-Valued Attribute
A multi-valued attribute has multiple values for each entity occurrence, with a range of allowable numbers of values defined by the notation `[min..max]` after the attribute name.
#### Derived Attribute
A derived attribute is computed from other attributes. It is prefixed with a `/`.
## ER Diagram to a Relational Data Model
There is not always direct correspondence between entities and relations.
We need a logical way to represent relationships: we can use **foreign keys**.
+ `1:1` relationship - decide based on **participation**:
	+ Add a foreign key to the **mandatory** entity;
	+ If both are mandatory, combine it into one relation;
	+ If both are optional, then either direction is fine.
+ `1:*` relationship - decide based on **cardinality**:
	+ Add the foreign key of the *one* side to the *many* side;
+ `*:*` relationship:
	+ Create a **separate relation** with 2 foreign keys;
		+ This can also be done in the ER model.