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
todo! up to post-quantum cryptography