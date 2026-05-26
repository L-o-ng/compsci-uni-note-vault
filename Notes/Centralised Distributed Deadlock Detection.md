#notes 

In **Centralised Deadlock Protection**, a *single* site is the **Deadlock Detection Coordinator** (*DDC*). It maintains the **global** wait-for graph (*WFG*).

Periodically:
+ Every site sends its **local** WFG to the DDC (sends diff);
+ The DDC updates the **global** WFG;
+ If *cycles* occur, the DDC breaks them by rolling back victims.

The main drawback here is that the DDC is a single point of failure, so the method is less **reliable**.

