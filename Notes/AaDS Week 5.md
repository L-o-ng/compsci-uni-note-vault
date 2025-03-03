#coursework 
1) Store names in hash table
```
h(name)=(sum of characters) mod 10
[
,
,
,
Sandy,
,
,
George,
,
Alan,
Amy
]
```
2) Any name containing an A will map to the 0 position.
3) 
```
def hash(d):
    """given a list d of integers returns a list of length 13
    describing the hash table obtained when the hash function
    h(k)=k mod 13 is applied to each integer k in d"""
    #initialize table
    table = ["-"]*13
    for k in d:
        if "-" not in table:
            break
        hasht = h(table, k)
        table[hasht] = k
    return table
    
def h(table, k):
    if k in table:
        return table.index(k)
    if table[k%13] != "-":
        return h(table, k + 1)
    return k % 13
```