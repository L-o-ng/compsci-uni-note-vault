#notes 

> [!abstract] 
> A file is accessed through a **Unique Resource Locator** (*URL*):
>  + It specifies the DNS name of its associated server, along with a file name;
>  + Documents are exchanged using HTTP;
>  + The browser takes input from users and displays the received documents. It also follows guidelines on how to process and display the data.
## Components of a Browser
+ **User Interface**: The user submits a request and interacts with the visual elements of a web page;
+ **Browser Engine**: Forwards the request to the rendering engine;
+ **Rendering Engine**: Transforms the content into visual representations for displaying onto the screen;
+ **Script Interpreter**: Executed [[Javascript]] code embedded in a website and then forwards it to the rendering engine;
+ [[HTML]]/[[XML]]: Converts text into objects.
## Web Services
### Components
Well-known standards are used for communication:
+ Communication:
	+ Message content expressed in XML;
	+ **Simple Object Access Protocol** (*SOAP*):
		+ Lightweight protocol for a/sync communication;
		+ Enables communication between client and server;
		+ Defines rules for using XML to represent request/reply messages and for communicating documents;
		+ A *SOAP* message consists of:
			+ A reference to a service description;
			+ Message;
			+ Documents.
+ Service Description:
	+ **Web Services Description Language** (*WSDL*):
		+ Interface description for web services, and also has the details of the communication method and URL.
+ Service Discovery:
	+ **Universal Description Discovery and Integration** (*UDDI*:
		+ Uses name, URL, and attributes to find web services;
		+ Directory with web service description in *WSDL*.

See also: [[REST]], [[JSON]].

![[Web Services.png]]
### Attributes
+ **Web-Based Protocols**: Web services based on HTTP are designed to work over the public internet. The use of HTTP for transport means these protocols can traverse firewalls and can work in a heterogeneous environment;
+ **Interoperability**: SOAP defines a common standard that allows differing systems to interoperate: for example, the tooling allows web clients to access Java server components and vice versa;
+ **XML-Based**: [[XML]] is a standard framework for creating machine-readable documents.

