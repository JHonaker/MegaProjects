function binaryToDecimal(bin) {
	var len = bin.length;
	var decimal = 0;
	for (var i = 1; i <= len; i++) {
		decimal += Math.pow(2, i-1) * parseInt( bin[len-i] );
	}
	return decimal;
};

function decimalToBinary(decimal) {
	var bin = "";
	while (decimal > 0) {
		bin += decimal % 2;
		decimal = decimal >> 1;
	}
	return bin.split('').reverse().join("");
};
