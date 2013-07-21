def countVowels(s):
	vowels = {
			'a': 0,
			'e': 0,
			'i': 0,
			'o': 0,
			'u': 0
			}

	s = s.lower()
	for vowel in vowels:
		index = 0
		index = s.find(vowel)
		while index != -1:
			vowels[vowel] += 1
			index = index + 1
			index = s.find(vowel, index)
			
	return vowels

print countVowels("mamma made me mash my m and m's oh my!")
print countVowels("cAsE insensItIvity!")
