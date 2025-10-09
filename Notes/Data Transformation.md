#notes 
## Transformation Types
+ **Encoding** - transforming data from one format to another. This is a fully reversible and public process.
+ **Hashing** - Data is transformed into a usually smaller, fixed size.
+ **Encryption** - Data is transformed using a secret key.
### Encoding
ASCII and Base64 are widely used examples of encoding.
### Hashing
MD5 and SHA are well-known hashing algorithms.
### Encryption
#### Caesar Cipher
This cipher is a simple cipher created by Julius Caesar, where the plaintext alphabet is rotated by the integer key to create a ciphertext alphabet. ROT13 is a standard example.
#### Simple Substitution Cipher
The plaintext alphabet is replaced with a complex permutation of the 26 letters to create a bruteforce-resistant ciphertext alphabet. There are $26! = \textasciitilde 4.1^{26}$ possibilities. This is vulnerable to frequency analysis.
#### Vignere Cipher
This cipher is a solution to break frequency analysis by having a sliding password, such that the same letter can be coded differently.
![[Vignere Cipher.png]]
1. Take the first letter of the text and password, and find the matching letter in the table.
2. Write down the letter.
3. Repeat this process for each letter, restarting the password if needed.
#### One Time Pad
We select a key as long as the message that can be used only once. A synchronisation between encryption and decryption about which page of the pad is used is necessary - once per day, for example. For efficiency, text is converted to binary and XOR-ed with the key. Decryption is simply carrying out the XOR operation between each character of the ciphertext and key.
#### Rail Fence
This is an example of a permutation cipher. Original letters are permutated instead of changed to other letters. For example, the plaintext `WE ARE DISCOVERED FLEE AT ONCE` with 3 rails is encrypted as follows:
```
W---E---C---R---L---T---E
-E-R-D-S-O-E-E-F-E-A-O-C-
--A---I---V---D---E---N--
```
which produces the ciphertext `WECRL TEERD SOEEF EAOCA IVDEN`
#### Public Key Cryptography
Public key cryptography works as follows:
1. Alice has a message $m$, a public key $K_{A}$ and a private key $sk_{A}$;
2. Bob has the public key $K_{B}$ and a private key $sk_{B}$;
3. Alice stores the encrypted version $c=E(m, K_{B})$;
4. Bob retrieves $c$ and decrypts it as $m=D(c,sk_{B})$.
##### RSA Public Key Cryptography
The Diffie-Hellman method relies on the Discrete Logarithm problem, which is easy to compute but hard to solve. RSA cryptography uses the Factorisation Problem. Each user in RSA has their own public key, known by anybody wanting to send messages.
###### RSA Signature
RSA works on the principle that, given the public/private keys $K_{B},sk_{B}$ for Bob:
$$
m=D(E(m,K_{B}),sk_{B})
$$
It turns out that we also have:
$$
m=D(E(m,sk_{B}),K_{B})
$$
If Bob takes a message $m$ and encrypts it with his private key $c=E(m,sk_{B})$ then anybody with his public key can check that $m=D(c,K_{B})$. 
###### Complete Example
1. Alice wants to send message $m$ to Bob;
2. She creates a hash $h=H(m)$ and encrypts it with her private key $s=E(h,sk_{A})$;
3. She encrypts $m,s$ wit h Bob's public key $c=E(m;s, K_{B})$;
4. Bob receives $c$ and decrypts it with his private key $m;s=D(c,sk_{B})$;
5. Bob decrypts $s$ with Alice's public key and checks $H(m)=D(s,sk_{A})$.
We assume that a malicious user Eve cannot:
+ Decrypt $m;s$ because only $sk_{B}$ can do that via brute force or key leakage;
+ Create $s$ because only $sk_{a}$ can do that via brute force or collision;
+ Find out $sk_{A}$ and $sk_{B}$ from $K_{A}$ and $K_{B}$ because of the difficulty of the used problem.
