#notes 

> [!abstract] 
> **Middleware** is software technology that enables **Distributed System** (*DS*) *components* to work together and communicate as if they were virtually non-distributed.
> ![[Middleware.png]]

This hides implementation details from users and makes development far more simple.
## Developing with Middleware
![[Middleware-1.png]]
### Remote Procedure Call
A **Remote Procedure Call** (*RPC*) allows execution of a remote function without the programmer implementing network communication.

Our goal is to make distributed computing look centralised. Remote services are transparent with regards to *location*, *implementation*, and *language*.
We face issues in:
+ Parameter Passing;
+ Bindings;
+ Semantics when encountering errors.

![[Middleware-2.png]]
![[Middleware-3.png]]
#### Process
+ The **Server** defines the service interface using an **interface definition language** (*IDL*), specifying names, parameters, and types for all client-callable procedures;
+ The **Stub Compiler** reads the IDL declarations and produces two *stub functions* for each server-side function - server and client function;
+ **Linking** involves the server programmer implementing the service's functions and links them to the server-side stubs. The client programmer implements the client program and links to the client stubs;
+ In **Operation**, the stubs manage all the details of remote communication;
+ The **RPC Runtime Library** contains the tables, data, and routines required for communication, hiding the encoding/decoding of parameters and results from the passing of messages from the application programmer.

![[Middleware-4.png]]
#### Properties and Limitations
Request/reply interaction is synchronous:
+ The connection is held open while waiting for the response to arrive or for the timeout to expire;
+ There is tight **coupling** between the client and server: the client may be blocked if the server is overloaded, and slow/failed clients can delay severs;
+ The performance may be worse as a result of unnecessary waiting.

Local procedure parameter passing supports call-by-value *and* call-by-reference for more complex data structures. In **contrast**, RPCs do not allow call by reference.

Host information is required, violating location transparency.

It is not [[Programming Paradigms|OOP]]:
+ There is no support for encapsulation or inheritance.
### Object-Oriented Middleware
This extends the idea of an RPC to allow remote invocation of **objects**.
+ It  follows the OOP model;
+ Local objects are passed by value and remote by reference;
+ It has the same synchronous nature as RPC.
#### Remote Method Invocation
An *RMI* is an *RPC* **applied** to an **object**. They support system-wide object references, and parameters can be references.
##### Distributed Objects
When a client *binds* to a distributed *object*, we load the interface/proxy into the client address space. The proxy here is analogous to a **stub**. The server stub is called a **skeleton**.
![[Middleware-5.png]]
![[Middleware-6.png]]
##### Development
Here, a **registry** or **daemon** is a *running process* on a host machine. It maintains the names of remote objects and helps look them up.
+ Servers register their objects with them;
+ Clients find server objects by name and obtain a remote reference;
+ Clients obtain a *stub* for remote object and request a list of remote objects from the registry.
###### Server
1. Design the interface for each service/object;
2. Implement the methods specified in the interface;
3. Registers objects with remote object registry/daemon.
###### Runtime Execution
1. On the server:
	1. Dynamically generate the **stub**;
	2. Register the service by name and location.
2. On the client:
	1. Look up the remote reference on the registry/daemon;
	2. Use normal method call syntax for remote methods;
	3. Use the service in an application.
#### Properties
+ We have location transparency, as the object request broker maps references to physical locations;
+ Services comprising multiple servers are easier to build:
	+ All services can be acquired through the object request broker;
	+ Geographical complexity/changes are hidden.



