#notes 

> [!abstract] 
> [[Remote Procedure Calls]] are tightly coupled. We need something more loose. **Message-Oriented Middleware** communicates with *messages*, stored in *message queues*.
> ![[Message Oriented Middleware.png]]

We now have asynchronous persistent communication using middleware-level queues. Queues correspond to buffers at communication servers.
![[Message Oriented Middleware-1.png]]
## Properties
+ **Asynchronous** interaction:
	+ Client and server are loosely coupled;
	+ Messages are queued;
	+ This is good for application integration.
+ We have support for *reliable* delivery:
	+ Queues are kept in persistent storage.
+ Message processing is done by intermediate message servers:
	+ They may perform filtering, transforming, logging, etc;
	+ We have a network of message servers.
