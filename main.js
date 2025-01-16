/*
This is a series of string challemges to help you get to grips with JS string methods! For other in the series go here: ......

Hello again challenger! This time your task is to write a function named `removeVowels` which takes in a string and returns the string with all vowels removed.


Example(Input --> Output)
"AEIOU are vowels." --> " r vwls."
"" --> "There is nothing to remove!"
"John mcclane" --> "Jhn Mccln"
"I enjoy solving coding challenges daily." --> " njy slvng cdng chllngs dly."

Note: it doesnt matter if the letters are lower or uppercase
*/

export default function removeVowels(string) {
  // // add you code here
  if (string.length === 0) {
    return "There is nothing to remove!";
  }
  return string.replace(/[aeiou]/gi, "");
}
