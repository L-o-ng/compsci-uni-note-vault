#notes 

In the **Join Idle Queue** policy, the servers inform the **load balancer** (*LB*) when they become **idle**. The LB then assigns an incoming job to an *idle* server. If there is no idle server, it is allocated *randomly*. It can be observed in practice that most of the time at least one idle server is available.
