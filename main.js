/*
This is a series of string challemges to help you get to grips with JS string methods! For other in the series go here: ......

Hello again challenger! This time your task is to write a function named `removeVowels` which takes in a string and returns the string with all vowels removed. 
If input is an empty string, it should return the message "There is nothing to remove!". If it is missing an input, then it should THROW an error message "There is no input to check!"



Example(Input --> Output)
removeVowels() --> throws error "Input string is required!"
"" --> "There is nothing to remove!"
"AEIOU are vowels." --> " r vwls."
"John mcclane" --> "Jhn Mccln"
"I enjoy solving coding challenges daily." --> " njy slvng cdng chllngs dly."
"UsE PlAywRiGHt fOr Api TesTinG!" -->  "s PlywRGHt fr p TsTnG!"

Note: it doesn't matter if the letters are lower or uppercase, ALL vowels need to be removed.
If unsure about throw Error check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
*/

export default function removeVowels(string) {
  // add your code here
  if (string === undefined) {
    throw new Error("Input string is required!");
  }
  if (string.length === 0) {
    return "There is nothing to remove!";
  }
  return string.replace(/[aeiou]/gi, "");
}
