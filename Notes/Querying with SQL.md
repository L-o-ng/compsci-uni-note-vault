#definition 

**Structured Query Language (SQL)**, Pronounced “S-Q-L” (sometimes “See-Quel” from old version SEQUEL), is a data definition language.

See [MySQL Docs](https://dev.mysql.com/doc/).
## Database Languages
A good database language allows user to:
+ Create a database;
+ Perform basic data management;
+ Perform simple and complex queries.
It should also be **simple** and **portable**:
+ The syntax should be easy to learn and use;
+ It should conform to a recognised **standard**.
### Examples
#### SQL
SQL is the most common database language. It conforms to the ISO/ANSI standard and has simple syntax. It has 2 components: DDL and DML.
##### Data Definition Language; DDL
DDL defines the **schema** for each relation, the **domain** of each attribute and the **integrity constraints**.
##### Data Manipulation Language; DML
DML allows you to `insert`, `update`, `delete`, `retrieve` data from the database.
The **query language** is the part of the DML that involves retrieval.
## SQL Statements
### Structure
SQL statements consist of:
+ **Reserved Words** - keywords and operators;
+ **User-Defined Words** - names of relations, attributes, etc;
+ **Literals** - strings enclosed in `'single quotes'` and numerical literals that are unquoted.
SQL is case-insensitive except for table names and character literals. It is free-format, so line breaks, whitespace, and indentation do not matter. Statements may be chained and terminated with a **semicolon**, and this is required in some implementations.

