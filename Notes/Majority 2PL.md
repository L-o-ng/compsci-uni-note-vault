#notes 

**Majority 2PL** is a special case of [[Distributed 2PL]], where a *write-lock* is granted if at least **half** of the sites confirm it. The lock holder notifies **all** sites that it has the lock.

A read-lock can be simultaneously held by many users.
A write-lock can be held by only one user each time.