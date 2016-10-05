// Instructions:
// Given a string, remove duplicate characters (case-sensitive), including
// punctuation.  Keep only the *last* instance of each character.
// Ex: "Snaps! crackles! pops!" => "Snrackle ops!"

function dedupeString(str) {
    var newStr = "";
    var chars = {};
    for (var i = str.length-1; i >= 0; i--) {
        if (!chars[str[i]]) {
            // If str character is new, add it to newStr
            newStr = str[i] + newStr;
            // and save that character to the chars object
            chars[str[i]] = true;
        }
    }
    return newStr;
}
