#notes 

In the Chinese wall model:
+ **Subjects** are active entities accessing protected objects;
+ **Objects** are data pieces organised into 3 levels:
	+ Information;
	+ Dataset;
	+ Conflict-of-Interest Classes.
+ **Access Rules** include:
	+ Read rule;
	+ Write rule.

![[Chinese Wall AC 1.png]]
![[Chinese Wall AC 2.png]]

A subject $s$ can **read** an object $o$ if *either* of the following conditions is satisfied:
1. $o$ is in the same *dataset* as an object already accessed by $s$;
2. $o$ belongs to a *conflict-of-interest* from which $s$ has not yet accessed any information.

$s$ can **write** to $o$ if *both* conditions are satisfied.

Theoretically, if $s$ reads objects from 2 different companies, it can *never* write. Therefore, manual exceptions are made for **sanitised** information.