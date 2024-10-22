#coursework 

1) 
```
Input: Doubly linked list L, data v, node N
Output: L with v inserted before N
	v.prev <- N.prev
	v.next <- N
	N.prev.next <- v
	N.prev <- v
```
If L had no sentinels you would need to check if if the reference returned by `N.prev` was null so you do not try to get the `.next` value of a null reference.

2) The code returns an integer `c` where `c` represents the number of times `k` appears in `A`.
3) 
```
Input: list H containing entries of integer S and string N, list E containing integer S, string N
Output: H with E placed as a highscore in the table.
	integer c <- -1;
	for i <- H.size - 1 to 0; i <- i - 1 do
		if H[i] = NULL then
			continue
		endif
		if E.S < H[i].S then
			c <- i + 1
			break
		endif
		if i = 0 and E.S > H[0].S then
			c <- 0
		endif
	endfor
	H.insert(E, c)
	if H.size > 10 then
		H.remove(H.last)
	endif
```

```
void update(ref List<List<object>> H, List<object> E) {
	int c = -1;
	for (int i = H.Count - 1; i >= 0 ; i--) {
		if (H[i] == null) continue;
		if ((int)E[0] < (int)H[i][0]) { c = i+1; break; }
		if (i == 0 && (int)E[0] > (int)H[0][0]) c = 0;
	}
	H.Insert(c, E);
	if (H.Count > 10)
		H.Remove(H.Last());
}
```

4) 
```
Input: Doubly linked list L
Output: Node N, the centre node
	integer c <- 0
	pointer p <- L.head
	while p.next != null do
		p <- p.next
		c <- c + 1
	endwhile
	for i <- 0 to c do
		p <- p.prev
	return N referenced by p
```

5) 
	1) A 2D list could be used. Each node in the top list, representing a player, has a value which would point to another list $n$ long, representing the players that player had met.
	2) 
```
Input: 2D list L, player ID i1, player id i2
Output: L updated with 1st dimension values updated to represent the 2 players meeting.
	L[i1][i2] <- true
	L[i2][i1] <- true
	return L
```
