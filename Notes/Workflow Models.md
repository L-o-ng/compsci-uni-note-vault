#notes 

See first: [[Nested Transaction Model]], [[Sagas]], [[Dynamic Restructuring]]

The models listed above can overcome *some* limitations of long-lived flat transactions, but are still not powerful enough to model some read-world applications.

> [!definition] 
> A **workflow** is an activity for coordinated execution of multiple tasks by people/processing systems.
> A **workflow model** is a complex model for specific applications, which hardly conforms to any [[Transactions#ACID Properties|ACID property]].

![[Workflow Models.png]]
This process may take several days. If it is implemented without locking, then the company account is unavailable from $A_{2}$ to abortion, or completion of $A_{5}$.
