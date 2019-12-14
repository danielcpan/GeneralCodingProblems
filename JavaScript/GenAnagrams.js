const genSubAnagrams = (word, anagram = '', anagrams = new Set()) => {
  // console.log("word: " + word + " anagram: " + anagram)
  if (anagram) anagrams.add(anagram)
  if (!word) return;

  for (let i = 0; i < word.length; i++) {
    // console.log("i : " + i)
    // Anagram is first letter
    // console.log("start: " + anagram);
    anagram += word[i];
    // console.log("after add first: " + anagram)
    const charsLeft = word.slice(0, i) + word.slice(i+1)
    // Word is string minus the letter at the index
    genSubAnagrams(charsLeft, anagram, anagrams)
    // console.log("after perm: " + anagram)
    // Remove last character from anagram
    anagram = anagram.slice(0, anagram.length-1)
    // console.log("after removing end: " + anagram)
  }

  return [...anagrams];
}

const genAnagrams = (word, anagram = '', anagrams = new Set()) => {
  console.log('word: ' + word + ' anagram: ' + anagram)
  if (!word) {
    anagrams.add(anagram)
    return;
  }

  for (let i = 0; i < word.length; i++) {
    anagram += word[i];
    // console.log(" - before anagram: " + anagram)
    genAnagrams(word.slice(0, i) + word.slice(i+1), anagram, anagrams)
    anagram = anagram.slice(0, anagram.length-1)
    // console.log(" - after anagram: " + anagram)
  }

  return [...anagrams];
}

// console.log(genSubAnagrams('ABC'))
console.log(genAnagrams('AAB'))