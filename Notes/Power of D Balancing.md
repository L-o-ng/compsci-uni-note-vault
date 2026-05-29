#notes 

Consider a system with a large number of servers $N$; let us say $N=10000$ here.
![[Power of D Balancing.png]]
In the **Power of $d$** load balancing policy, we assign the job to the server with the *least queue size* out of $d$ servers chosen uniformly at random.

There is a *significant* performance gain even for $d=2$ under this policy over just selecting randomly.

