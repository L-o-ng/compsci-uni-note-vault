#coursework 

1) 
	1) The given program computes the product of all the odd numbers in the range $L\le x\le H$.
	2) 

``` Odd_Product
Input: integer L, integer H
Output: Product of odd numbers between L and H
	integer p = 1
	for i = L to H do
		if i is odd then
			p *= i
		end if
	end for
	print p
```

2) 
```Second_Smallest
Input: integer n, integers a_1, a_2, ... a_n-1
Output: second smallest of a_1, a_2, ... a_n-1
	if n < 2 then
		exit
	else
		integers A[a_1, a_2, ... a_n-1]
		integer smallest
		integer second_smallest
		if a[0] <= a[1] then
			smallest <- A[0]
			second smallest <- A[1]
		else 
			smallest <- A[1]
			second_smallest <- A[0]
		endif
		for i = 2 to n-1 do
			if A[i] < smallest then
				smallest <- A[i]
			else if A[i] > smallest and A[i] < second_smallest then
				second_smallest <- A[i]
			endif
		endfor
		print second_smallest
	endif 
```

3) 
```Is_Prime
Input: integer k
Output: true if k is prime, else false
	boolean prime <- true
	for i = 2 to k/2+1 do
		if i divides k then
			prime <- false
		endif
	endfor
	print prime
```

4) 
```Rust_Days_After
fn days_after(day: i32, month: i32, year: i32, k: i32) -> Date {
	let mut date = Date::new(day, month, year);
	for _ in 0..k {
		date.increment_day();
	}
	date
}

struct Date {
	day: i32,
	month: i32,
	year: i32,
}

impl Date {
	fn new(day: i32, month: i32, year: i32) -> Self {
		Self { day, month, year }
	}
	fn increment_day(&mut self) {
		self.day += 1;
		let months = vec![31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		if !(self.day == 29 && self.month == 2 && self.year % 4 == 0) && self.day > months[(self.month - 1) as usize] {
			self.day = 1;
			self.increment_month();
		}
	}
	fn increment_month(&mut self) {
		self.month += 1;
		if self.month == 13 {
			self.month = 1;
			self.increment_year();
		}
	}
	fn increment_year(&mut self) {
		self.year += 1;
	}
}
```