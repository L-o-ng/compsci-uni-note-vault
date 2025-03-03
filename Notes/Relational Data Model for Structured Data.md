#notes 

The relational data model includes:
+ Relations - a table with columns and rows
	+ Attributes - a named column (field)
	+ Tuple - a row (record)
A **relational database** is a collection of normalised relations.
## Schema
The schema of a relation, $R$, is as follows: $R(A_{1},A_{2},\dots,A_{n})$.
+ The relation has **attributes** $A_{1},A_{2},\dots,A_{n}$.
The ordering of attributes does not matter, unlike in mathematics.
## Terminology
![[Relational Data Model Terminology.png]]
+ **Relation**: A table, with rows and columns; this only refers to the *logical structure*, not storage etc.
+ **Attribute**: A named column in a table, with a unique name.
+ **Tuple**: A row in the table, which holds the specific values for all attributes.
+ **Domain** (of an attribute): The set of allowed tuples.
+ **Cell**: A value of a specific attribute in a tuple (intersection of a row and column).
+ **Degree**: The number of attributes.
+ **Cardinality**: The number of tuples.
We say a relation is **normalised** if it is appropriately structured:
+ It fulfils certain conditions;
+ Every cell has exactly one value;
+ No repetition of identical tuples.
## Domain of an Attribute
![[Domain of an attribute.png]]
Every attribute is defined on a domain. This is a central place to define meaning and allowed values for an attribute. This may be distinct, or the same for different attributes. This allows semantically correct operations to be permitted and vice versa.
## NULL values
`NULL` indicates the **absence** of a value - either currently unknown or not applicable.
It is **not** a normal value, and so has a special way of being handled. It is not falsy and so can cause implementation problems.
## Keys
There are many ways of uniquely identifying a tuple in a relation:
+ **Key**: a set of attributes whose values uniquely determine a tuple.
+ **Candidate Key**: a minimal set of attribute that is a key:
	+ *Minimal*: you cannot drop any attribute; **not** the smallest possible number of attributes.
+ **Primary Key**: one candidate key selected to identify tuples.
+ **Alternate Key**: any candidate key that is not the primary key.
+ **Simple key**: a key that consists of a single attribute.
+ **Composite Key**: a key that consists of multiple attributes.
### Candidate Key Example
Consider the following table:
![[Candidate Key Example.png]]
We can use *surname*, *(prename, surname)*, *(prename, surname, DOB)* as a key. They are all candidate keys, but the latter 2 are composite keys and the former is not guaranteed to be unique. In contrast, *studentNo* is **simple** and ensured to be unique.
### Foreign Keys
Consider the following database:
![[Foreign Keys example.png]]
Every student has a mentor. How can we reference another entity?
+ We can have an attribute in relation A that must either match the **primary key** of another table B (in which case, relation A references relation B), or be `NULL`.
## Integrity Constraints
### Domain Constraints
The **domain** can enforce constraints on attributes, such that attribute values have to lie within their respective domain.
### Entity Integrity
Attributes of the primary key cannot be `NULL`. This guarantees that each entity has a unique identifier, and ensures foreign key values form proper references.
### Referential Integrity
Foreign keys must match some primary key or be `NULL`. This ensures references are valid, and prevents deletion of a referenced tuple.
## View
So far, all relations were **base relations** - the tuples are physically stored in the database.
A **view** is a different type of relation.
+ It is *virtual*, so not stored physically;
+ It is derived from one or more base relations;
+ It is computed *upon request* by a user.
A view is mainly used to show customised information to every user, including hiding information. It can also compute dynamic quantities, such as age from DOB.
**Updates** are allowed for views that:
+ Involve only a single base relation;
+ Contain either the primary key or a candidate key of the base relation;
+ Do not use aggregation or grouping operations.
## Alternatives
### Network Model
We can represent the [[#Example]] `studentCourses` table as a network:
![[Network Database Model.png]]
It is:
+ A record-based data model;
+ Records (tuples) are nodes in a graph;
+ Relationships (foreign keys) are edges in the graph.
### Hierarchical Model
![[Hierarchical Database Model.png]]
This model is:
+ A restricted type of network data model;
+ Each node can only have one parent;
+ This can hence be represented as a [[Trees|Tree]].
## Example

| Students  |         |            |
| --------- | ------- | ---------- |
| `studentNo` | `prename` | `surname`    |
| `S001`      | `Juan`    | `Perez`      |
| `S002`      | `Jane`    | `Doe`        |
| `S003`      | `Erika`   | `Mustermann` |
| `S004`      | `Jean`    | `Dupont`     |

| Courses    |                 |
| ---------- | --------------- |
| `courseNo` | `title`         |
| `C001`     | `Hard Coding`   |
| `C002`     | `Optimisation`  |
| `C003`     | `Architectures` |

| StudentCourses |          |
| -------------- | -------- |
| `studentNo`      | `courseNo` |
| `S001`           | `C001`     |
| `S001`           | `C002`     |
| `S002`           | `C001`     |
| `S003`           | `C002`     |
| `S004`           | `C001`     |
| `S004`           | `C002`     |
| `S004`           | `C003`     |
