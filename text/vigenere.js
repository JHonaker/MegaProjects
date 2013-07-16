var base = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(key, dec) {
	return base[ (base.indexOf(dec) + base.indexOf(key)) % 26 ];
}

function decryptLetter(key, enc) {
	// Arrays don't do well with negative indexes
	// Add 26 to it (in modular arithmetic this is like adding 0,
	// but it converts negtive modulos into postive indexes).
	return base[ ( 26 + (base.indexOf(enc) - base.indexOf(key))) % 26 ];
}

function encrypt(key, dec) {
	var enc = "";
	for (var i = 0; i < dec.length; i++) {
		enc += encryptLetter(key[i % key.length], dec[i]);
	}
	return enc;
}

function decrypt(key, enc) {
	var dec = "";
	for (var i = 0; i < enc.length; i++) {
		dec += decryptLetter(key[i % key.length], enc[i]);
	}
	return dec;
}
