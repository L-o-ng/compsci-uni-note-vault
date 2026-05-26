#notes 

In the **Distributed 2PL Protocol**, we have *one* **Locking Manager** (*LM*) at every site, which manages the locks for the data at only that site.
If data is not replicated, this is equivalent to [[Primary Copy 2PL]].

We maintain a **Read-One-Write-All** (*ROWA*) rule:
+ We impose a *read-lock* at **one** site that keeps the item;
+ We impose a *write-lock* at **every** site that keeps the item.

We check whether a write-lock can be granted by having the requesting site *wait* for **confirmation** from **all** sites that keep the item. This has a high communication cost.
![[Distributed 2PL.png]]
