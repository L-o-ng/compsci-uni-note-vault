#notes 
## ANSI-SPARC Architecture
See [[Database Management Systems#Three-Level Architecture]].

The **ANSI-SPARC** architecture (American National Standards Institute - Standards Planning and Requirements Committee) realises the concept of [[Abstraction]] in a database.
### External Level
The **external level** is the *users'* view of the database. There can be multiple different views of the same data, adapted to the needs of specific users.
### Conceptual Level
The **conceptual level** is the *communal* view of the database. It is shared by all users, and describes *what* data is stored in the database:
+ Entities, attributes, and relationships;
+ Constraints;
+ Security and integrity information.
It is a logical structure of entire database, so it must support external views.
There are **no** storage-specific details.
### Internal Level
The **internal level** is the *physical representation* of the database. It describes *how* the data is stored. It exists in order to achieve:
+ runtime performance;
+ good storage-space utilisation.
It is an interface to the operating system, and is where compression and encryption is handled. As such, it is not *clearly* separate from the physical organisation.

---

[[Database Management Systems]] handle the physical organisation at the lowest level - we mainly focus on the conceptual level.
## Schema and Instance
### Database Schema
A database schema is a complete description of the database. It is the result of the database design process. It should not change after a database has been created.
There are multiple **external** (sub)schemata (different views), but:
+ Only one **conceptual** schema (all entities/attributes/relationships);
+ Only one **internal** schema (low-level description).
### Database Instance
A database instance is concrete data in the database at a particular point in time. It changes frequently - anytime data is inserted, updated, and deleted. Many different instances may correspond to the same schema.

---

## Data Independence
### Logical Independence
External schemata remain the same if we change the logical structure on the conceptual level.
### Physical Independence
The conceptual schema remains the same if we change the internal schema.

---

## Database Designs
### Conceptual Design
Construct a first, high-level model of the data:
+ Use ER Modelling;
+ Identify appropriate entities, attributes, relationships, and constraints.
These should be based on the user's requirements specification, independent of any physical considerations, and relevant for the **conceptual**, but also the external level. It serves as the fundamental understanding of the system.
### Logical Design
Construct the relational data model of the data.
Use the **conceptual design**:
+ map entities and relationships to tables.
+ Use **normalisation** techniques to eliminate data redundancy and anomalies.
### Physical Design
Describe the implementation of the logical design; the *how* as opposed to the *what*.
Define specific:
+ storage structures;
+ access methods;
+ security protection.
Consider concrete usage and transactions. Optimise for performance.
