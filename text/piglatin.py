def pigWord(word):
	vowels = ['a', 'e', 'i', 'o', 'u']
	
	if word[0] in vowels:
		return word + "way"
	else:
		closestVowelIndex = len( word )
		for vowel in vowels:
			index = word.find(vowel)
			if (index < closestVowelIndex) and index != -1:
				closestVowelIndex = index

		return word[closestVowelIndex:] + word[0:closestVowelIndex] + 'ay'
	
def pigLatin(sentence):
	punct = ''
	if not sentence[-1].isalpha() == True:
		punct = sentence[-1]
		sentence = sentence[0:-1]
	sentence = sentence.lower().split(' ')
	result = []
	for word in sentence:
		result.append(pigWord(word))

	result = ' '.join(result)
	result = result[0].upper() + result[1:] + punct
	return result

print pigLatin("This is a dumb sentence.")
print pigLatin("look i capitalize the first letter and add the punctuation used!")

