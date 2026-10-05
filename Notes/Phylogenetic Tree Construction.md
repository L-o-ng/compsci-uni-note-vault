#topic 
## Notes
+ [[Sequence Alignment]]
+ [[Protein Folding]]
+ 

---

To construct a phylogenetic tree, we:
1. **Extract** a DNA sequence from each species;
2. **Align** the sequences;
3. Compute the *inter-species* distances;
4. Build a **tree** from the distance matrix.

We have 3 main sequences: *DNA*, *RNA*, and *protein*:
+ DNA/RNA: **alphabet** of 4 letters: $\{ A,C,G,T \}/\{ A,C,G,U \}$;
+ Protein: **alphabet** of 20 amino acids.

Overlapping DNA reads helps us assemble a *genome*; similar subsequences helps identify regulatory elements.
Finding similar proteins helps predict their function and structure.
Comparing many sequences can help reconstruct evolutionary history.
