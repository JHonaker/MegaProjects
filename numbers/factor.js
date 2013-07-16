// This is a very basic algorithm and it will be slower for VERY large numbers
var primeFactors = function(n) {
	var factors = [];
	for (var i = 2; i <= n; i++) {
		while ( n % i === 0 ) {
			factors.push(i);
			n = n / i;
		}
	}
	return factors;
}
