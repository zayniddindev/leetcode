function isMatch(s: string, p: string): boolean {
  if (s.length !== p.length && p.includes("*") == false) return false;
  for (let i = 0; i < s.length; i++) {
    console.log(s.charAt(i), p.charAt(i));
    if (p.charAt(i) !== s.charAt(i) || p.charAt(i) !== "." || p.charAt(i) !== "*") return false;
  }
  return true;
}
console.log(isMatch("aaa*", "aaaa"));

/**
 * 
 * ****       **     ******            ******   ******   **       **    ** ***********  **  ******  ****       **
 * ** **      **    **    **          **       **    **  **       **    **     **       ** **    ** ** **      **
 * **  **     **    **    **         **        **    **  **       **    **     **       ** **    ** **  **     **
 * **   **    **    **    **         **        **    **  **       **    **     **       ** **    ** **   **    **
 * **    **   **    **    **           **      **    **  **       **    **     **       ** **    ** **    **   **
 * **     **  **    **    **             **    **    **  **       **    **     **       ** **    ** **     **  **
 * **      ** **    **    **             ***   **    **  **       **    **     **       ** **    ** **      ** **
 * **       ****     ******         ******      ******   *******   ******      **       **  ******  **       ****
 * 
 */