#notes 
## Storing Data
In ancient times, a [Tally Stick](https://en.wikipedia.org/wiki/Tally_stick) was used to record numbers and quantities, especially for transactions and trade. It allowed people of the time to **enforce consistency**.
Nowadays, electronic databases are used for reliable and flexible data storage everywhere.
They use methods to:
+ Store data
+ Manipulate data
+ Enforce consistency
### Ways of Storing Data
+ **Pen and paper**
	+ Intuitive;
	+ Good for a few users;
	+ ==Hard to maintain or scale==.
+ [Rolodex](https://en.wikipedia.org/wiki/Rolodex)
	+ Easy to maintain, search, and scale;
	+ ==Limited space==;
	+ ==No structured queries==.
+ **Text files on a computer**
	+ Flexible space;
	+ Complex queries via custom applications;
	+ ==Query types are specific to applications==;
	+ ==Data is scattered, causing isolation and duplication==;
	+ ==Structure is hard-coded in applications, causing data dependence==;
	+ ==File formats may be incompatible==;
		+ A file based approach only implicitly defines the data structure. There is no *unified* and *central* access and control system.
+ **Database** - a *shared collection of data*
	+ Data is *logically related*;
	+ The database structure is *self-describing* - it is ==data about data==;
	+ Essentially, it is a form of *data abstraction* - a separation of the internal and external representation.
## Database Management Systems
>A **Database Management System**, or DBMS, is a software system to *define*, *create*, *maintain*, and *control access* to a database.
### Components
+ **People**
	+ Any person interacting with the DBMS in any way.
+ **Procedures**
	+ Documented instructions on how to use the DBMS.
+ **Data** - including metadata.
+ **Software**
	+ This includes the DBMS itself, alongside the OS, network software, and applications.
+ **Hardware**
	+ PC, server network, etc
### Three-Level Architecture
![[Database Architecture.png]]
A three level system allows data abstraction:
+ Users can access the same data, but have different, customised views.
+ Users can change views without affecting other users.
+ The internal structure can be changed without affecting users.
### User Roles
+ **End-users**
	+ Can be naive or sophisticated.
+ **Application Developers**
	+ Can make use of the database for a specific purpose.
+ **Database designers**
	+ Can be a logical or physical design.
+ **Administrators**
	+ Can refer to Data Administrators (DA), or Database Administrators (DBA).
### Dis/Advantages
1) Control over *data redundancy*, *consistency*, and *standards*.
2) Improved *accessibility* and *productivity* (via sharing data, and extracting more information from the same amount of data).
3) Improved *security* and *maintenance*, allows for *backup* and *recovery*.
However,
1) Increased **complexity**, **size**, and **cost**.
2) Potentially worse **performance**.
3) Centralisation means there is a **single point of failure**.
