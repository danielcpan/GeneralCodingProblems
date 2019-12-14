const lengthOfLongestSubstring = s => {
  const longestPossible = new Set(s.split('')).size
  let maxLen = 0;
  let maxStr = '';

  for (let i = 0 ; i < s.length; i++){
    const letter = s[i];
    const posIndex = maxStr.indexOf(letter);
    if (posIndex > -1) maxStr = maxStr.substring(posIndex + 1); 
    maxStr += letter;
    if (maxStr.length > maxLen) maxLen = maxStr.length
    if (maxLen === longestPossible) return maxLen;
  }
  return maxLen;
};