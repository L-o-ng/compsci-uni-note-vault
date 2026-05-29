#notes 

![[Proxy Servers.png]]
**Proxy servers**, or *web proxies*, can be used when the browser does not implement FTP. Proxy servers can be used to store or cache data/files near users.
## Cooperative Catching
![[Proxy Servers-1.png]]
In **cooperative catching**, proxies cooperate with each other to serve a request quickly.
## Challenges
+ Proxy files can become **stale**, while the main web server has the most up-to-date version. Ensuring consistency across proxies is a key challenge. This can be handled either by:
	+ Proxies periodically requesting updates;
	+ Servers pushing updates when changes occur.
+ Several factors affect update strategies:
	+ **Data Sensitivity**: This requires *strict* consistency, often with server-initiated updates;
	+ **User Demand**: This influences update frequency - low-demand files may be updated less often to reduce traffic;
	+ **High-Demand Files**: These need more frequent consistency checks;
	+ **Rapidly Changing Data**: This increases update traffic.

Designing efficient proxy systems depends on balancing these whilst ensuring that edge servers deliver better performance.