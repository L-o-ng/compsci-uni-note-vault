#notes 
## SSL/TLS
SSL/TLS is a cryptographic protocol working between the transport and application layers. 
A certificate contains information from an entity, including its identity and its public key, and this information is signed by a known CA. There are a limited number of CAs, and they are publicly known.
A certificate can be modelled as $CA,\{ S,KS \}_{kCA}$, where:
+ The **CA** is the identity of the certification authority;
+ $\{ S,KS \}_{kCA}$ is the identity of the server and its public key signed by the private key of CA.

The main idea is that the client $A$ and server $S$ first agree on their cryptographic preferences, $PA,PS$. The server sends its public key signed by the certificate, and the client sends a pre-master-key, encrypted by the public key. The session key is then derived from the PMS using a pseudo-random function.
```
A -> S: A, NA, PA
S -> A: NS, PS, CA, {S, KS}_kCA 
A -> S: {PMS}_KS
A -> S: {"hello world"}_PRF(PMS, NA, NS)
```
By default, there is no client authentication. The server is not sure to talk to $A$. We can optionally add steps 3 and 5 to fix this:
```
1. A -> S: A, NA, PA
2. S -> A: NS, PS, CA, {S, KS}_kCA
3. A -> S: {A, KA}_kCA
4. A -> S: {PMS}_KS
5. A -> S: {H(NS, S, PMS)}_kA
6. A -> S: {"hello world"}_PRF(PMS, NA, NS)
```
## IPSec
IPSec was issued in 1998 as the design for a new network layer. It was designed for security-ignorant applications *not* already using enc/auth. IPSec can encrypt and/or authenticate all traffic at IP level by using **symmetric-key cryptography** and **hash functions**. It is designed flexibly so that the cryptographic protocol can be **swapped out** or set to null.
+ **Security Association**: A set of parameters describing the preferences of the parties and the session key;
+ **ISAKMP** (*Internet Security Association and Key Management Protocol*): The protocol establishing the security association between parties;
+ ==Headers==;
	+ **Authentication Header**: Provides only authentication and integrity;
	+ **Encapsulating Security Payload**: Provides confidentiality and integrity, with optional authentication.
+ ==Modes==.
	+ **Transport**: Header is introduced between IP and transport headers;
	+ **Tunnel**: Header is stacked before IP header.

