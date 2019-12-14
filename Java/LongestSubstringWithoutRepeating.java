import java.util.*; 

class Solution {
  public static void main(String args[]) {
    System.out.println(lengthOfLongestSubstring("abcabcbb"));
    // String[] splitArray = "abcabcbb".split("");
    // System.out.println("abcabcbb".split("\\s+"));
    // System.out.println(Arrays.toString("abcabcbb".split("")));
  }

   public static int lengthOfLongestSubstring(String s) {
    int longestPos = new HashSet<>(Arrays.asList(s.split(""))).size();
    int maxLen = 0;
    String maxStr = "";

    for (int i = 0; i < s.length(); i++) {
      char letter = s.charAt(i);
      int posIndex = maxStr.indexOf(letter);
      if (posIndex > -1) maxStr = maxStr.substring(posIndex + 1);
      maxStr += letter;
      if (maxStr.length() > maxLen) maxLen = maxStr.length();
      if (maxLen == longestPos) return maxLen;
    }
    return maxLen;
  }
}

