#notes 

The relational data model includes:
+ Relations - a table with columns and rows
	+ Attributes - a named column (field)
	+ Tuple - a row (record)
A **relational database** is a collection of relations.
## Example

| Students  |         |            |
| --------- | ------- | ---------- |
| `studentNo` | `prename` | `surname`    |
| `S001`      | `Juan`    | `Perez`      |
| `S002`      | `Jane`    | `Doe`        |
| `S003`      | `Erika`   | `Mustermann` |
| `S004`      | `Jean`    | `Dupont`     |

| Courses  |               |
| -------- | ------------- |
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
