#notes 
## Direct-Mapped BTB
We have a cache-like structure for target addresses:
+ **Byte Offset**: 2 bits. Instructions are 4-byte aligned, bits `[1:0]` are always 0;
+ **Index Bits (K)**: `[K+1:2]`, indexing into $2^{k}$ entries;
+ **Tag Bits**: Remaining upper bits `[21:K+2]`.

```
struct BTBEntry {
	bool valid;         // 1 bit
	uint32_t tag;       // 32 - (K+2) bits
	uint32_t target_pc; // 32 bits
}
```
### Lookup and Update
#### Lookup
1. Compute `index` and `tag`. If `entry.valid && entry.tag == tag` then return `Hit, entry.target_pc`. Else return `Miss, PC + 4`;
2. Update `PC, target_pc, taken`. On execution, if a branch is Taken, we update: `entry.valid = true, entry.tag = computed_tag, entry.target_pc = actual_target`.

