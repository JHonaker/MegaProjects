var cache = {};

function fib(n) { 
	if (n in cache) {
		return cache[n]
	} else if (n <= 2) {
		return 1;
	} else {
		var fibNminus1 = fib( n - 1 );
		var fibNminus2 = fib( n - 2 );
		cache[n-1] = fibNminus1;
		cache[n-2] = fibNminus2;
		cache[n] = fibNminus1 + fibNminus2;
		return fibNminus1 + fibNminus2;
	}
}

// Only the first 1475 terms of the sequence can be computed without overflow
function fibSeq(n) {
	var seq = [];
	for (var i = 1; i <= n; i++) {
		seq.push(fib(i));
	}
	return seq;
}
