function reverse(str) {
	return str.split("").reverse().join();
};

function reverse2(str) {
	var reversed = "";
	var len = str.length
	for (var i = 0; i < len; i++) {
		reversed += str[len - i - 1];
		str = str.slice(0,len - 1 - i);
	}
	return reversed;
};

