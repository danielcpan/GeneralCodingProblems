public class URLifyQuestion {
  public static void main(String args[]) {
    System.out.println("is this working 1?");
    System.out.println(URLify("Mr John Smith "));
    // System.out.println("is this working?");
  }

  public static String URLify(String str) {
    String newStr = "";
    for (int i = 0; i < str.length(); i++) {
      System.out.println("is this working?");
      if (str.charAt(i) == ' ') {
        str += "%20";
      } else {
        str += str.charAt(i);
      }
    }
    return newStr;
  }
}