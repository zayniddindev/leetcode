//https://leetcode.com/problems/generate-parentheses/

function generateParenthesis(n: number): string[] {
  return [""];
}

//n=3
// ["((()))","(()())","(())()","()(())","()()()"]

//111000 110100  110010   101100   101010

//n=2
//["(())", "()()"]


// ()

/**
 * 11110000 (((())))
 * 11101000 ((()()))
 * 11100100 ((())())
 * 11100010 ((()))()
 * 11011000 (()(()))
 * 11010100 (()()())
 * 11001010 (())()()
 * 
 * 
 * 
 * 
 * 10101010 ()()()()
 *
 * */