#notes 

For small finite groups, it is useful to display all the information via a *group table*.
We can write all elements $a$ of the group on the left side, and all elements $b$ along the top.

So for $\Bbb{Z}_{4}$,

| +   | 0   | 1   | 2   | 3   |
| --- | --- | --- | --- | --- |
| 0   | 0   | 1   | 2   | 3   |
| 1   | 1   | 2   | 3   | 0   |
| 2   | 2   | 3   | 0   | 1   |
| 3   | 3   | 0   | 1   | 2   |
Or for $D_{3}$, noting that it is non-symmetric along the diagonal since it is not an [[Abelian Groups|Abelian Group]]

| $o$ | $Id$ | $r$   | $r^2$ | $s$   | $t$   | $u$   |
| --- | ---- | --- | --- | --- | --- | --- |
| $Id$  | $Id$ | $r$   | $r^2$ | $s$   | $t$   | $u$   |
| $r$   | $r$    | $r^2$ | $Id$  | $u$   | $s$   | $t$   |
| $r^2$ | $r^2$  | $Id$  | $r$   | $t$   | $u$   | $s$   |
| $s$   | $s$    | $t$   | $u$   | $Id$  | $r$   | $r^2$ |
| $t$   | $t$    | $u$   | $s$   | $r^2$ | $Id$  | $r$   |
| $u$   | $u$    | $s$   | $t$   | $r$   | $r^2$ | $Id$  |
	There is a *much* simpler way of expressing all the info about this group: recall from [[Symmetries]] we can generate all the elements from $r,s$, so in fact,$$D_{3}=\{ r,s|r^3=Id,s^2=Id,s rs=r^{-1} \}$$We can generalise this to the $D_{n}$ **dihedral group**:$$D_{n}=\{ r,s|r^n=Id,s^2=Id,s r s=r^{-1} \}$$which gives the symmetries of a regular, $n$-sided polygon:
		$r$ is a $\frac{2\pi}{n}$ clockwise rotation through the centre.
		$s$ is a reflection.