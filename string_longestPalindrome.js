// Instructions:
// Given a string, find the longest palindromic substring.
// Ignore spaces, capitalization, and punctuation.  Examples:
// "what's up, daddy-o?" => "dad"
// "uh... not much" => "u"
// "Hot puree eruption!" => "tpureeerupt"

// Generate and test all substring possibilities
function longestPalindromeAlpha(str) {
	str = str.toLowerCase().match(/[a-z]/gi).join("");
	var longest = "";
	var testStr = "";
	for (var i=0; i<str.length-longest.length; i++) {
		for (var j=i; j<str.length; j++) {
			testStr += str[j];
			if (testStr.length>longest.length && isPalindrome(testStr)) {
				longest = testStr;
			}
		}
		testStr = "";
	}
	return longest;
}

// Search for possible matches, then generate and test substring
function longestPalindromeBeta(str) {
	str = str.toLowerCase().match(/[a-z]/gi).join("");
	var longest = str[0];
	var testStr = "";
	for (var i=0; i<str.length-longest.length; i++) {
		for (var j=i+longest.length; j<str.length; j++) {
			if (str[i] == str[j] && str[i+1] == str[j-1]) {
				for (var k=i; k<=j; k++) {
					testStr += str[k];
				}
				if (isPalindrome(testStr))  {
					longest = testStr;
				}
				testStr = "";
			}
		}
	}
	return longest;
}

// Check if a string is a palindrome
function isPalindrome(str) {
	for (var i=0; i<(str.length-1)/2; i++) {
		if (str[i] != str[str.length-1-i]) {
			return false;
		}
	}
	return true;
}
