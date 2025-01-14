#definition 

**Structured Query Language (SQL)**  
+ Pronounced “S-Q-L” (sometimes “See-Quel” from old version SEQUEL)  
+ data definition  
	+ `CREATE TABLE Staff (staffNo VARCHAR(5), IName VARCHAR(15), salary DECIMAL(7,2));`  
+ data manipulation (updates)  
	+ `INSERT INTO Staff VALUES (‘SG16’, ‘Brown’, 8300);`
+ data manipulation (queries)  
	```
	SELECT staffNo, IName, salary
	FROM Staff  
	WHERE salary > 10000;
	```

