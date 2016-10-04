// Instructions:
// Given a string of words (with spaces, tabes, or linefeeds), return
// an array of words.  Bonus: Handle punctuation.

function stringToArray(str) {
    var arr = [];
    var temp = "";
    for (var i=0; i<str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            temp += str[i];
        } else if (/\s/.test(str[i]) && temp) {
            arr.push(temp);
            temp="";
        }
    }
    if (temp) { arr.push(temp); }
    return arr;
}
