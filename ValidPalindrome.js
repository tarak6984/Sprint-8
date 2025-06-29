// Challenge 2: Palindrome Checker

function isPalindrome (s){
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
}


// Test Cases

console.log(isPalindrome("BLUE"))