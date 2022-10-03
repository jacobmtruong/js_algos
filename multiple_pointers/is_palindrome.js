// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    
    s = s.toLowerCase();
    s = s.replace(/[^A-Za-z0-9]/g, '');
    
    let start = 0
    let end = s.length - 1
    
    while (start <= end){
        if (s[start] != s[end]){
            return false
        } else {
            start++;
            end--;
        }
    }
    
    return true;
    
    
};