#notes 

All modern large-scale computer systems use **Content Delivery Networks** (*CDN*s).

A *CDN* is:
+ A network of edge caches deployed as a commercial service;
+ They cache rich web content;
+ It is delivered from the closest edge proxy server.

There exists a global network of edge proxies to deliver web content. One such CDN is the Akamai CDN, with 120000 servers in 1100 networks over 80 countries.

![[Content Distribution Networks.png]]

CDNs try to serve a request using a cached file from a local server.
Regular DNS provides an IP address for the service.
CDN DNS maps that IP address to the IP of a nearby server.

![[Content Distribution Networks-1.png]]

