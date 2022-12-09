function isPalindrome(word) {
  // Write your algorithm here

  //iterating over the element from the beginning to the end
  for(let i = 0; i < word.length / 2; i++){
    const j = word.length - 1 - i;

    //startChar starts from begining
    const startChar = word[i]
    // endChar starts from the last element
    const endChar = word[j]

    // If there is no match, it returns false
    if (startChar != endChar){
      return false
    }

    //return true
    return true
  }
}
/* 
  Add your pseudocode here
  iteratiing through the element using for loop using const/let i
  declaire a variable that will start checking from the last character
  compare the two variable, if they match, returns true... if there is no match, returns false
*/
/*
  Add written explanation of your solution here
  TO solve this: I'l have to check each character and see if the first character matches
  the last, if the second character matches the second to last character etc...
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;