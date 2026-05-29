#notes 

**Transparency** is the phenomenon by which the *distributed* system attempts to hide:
1. Its processes and resources being physically distributed across multiple computers across large distances;
2. *Changes* in components.

| Types       | Description                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| Access      | Hide differences in data representations and how a component is accessed; local/remote resources are accessed identically. |
| Location    | Hide the location of a component.                                                                                          |
| Migration   | Hide that a component or resource may move to another location.                                                            |
| Relocation  | Hide that a component or resource may move while in use.                                                                   |
| Replication | Hide that a component or resource may have multiple copies.                                                                |
| Concurrency | Hide that a resource may be shared by several competitive users.                                                           |
| Failure     | Hide the failure and recovery of a resource or component.                                                                  |
