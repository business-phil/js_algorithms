// Instructions:
// Given a string, retaun words that occur only once.  Ignore
// punctuation and capitalization.
// ex: "Sing a song! Sing a song; sing out loud and strong!"
//      => "out loud and strong"

function uniqueWords(str) {
    var words = {};
    var temp = "";
    var result = "";
    str = str.toLowerCase();
    for (var i=0; i<str.length; i++) {
        if (/[a-z]/.test(str[i])) {
            temp += str[i];
        } else if (temp) {
            // Incriment key value if it exists
            if (words[temp]) { words[temp]++; }
            // Or declare key and assign value to equal 1
            else { words[temp] = 1; }
            temp = "";
        }
    }  // end for loop
    // Check temp again in case str didn't end with punctuation
    if (temp) {
        if (words[temp]) { words[temp]++; }
        else { words[temp] = 1; }
    }
    for (var word in words) {
        if (words[word] == 1) {
            result += word + " ";
        }
    }
    // Remove last space in result string
    if (result) { result.length--; }
    console.log(words);
    return result;
}

console.log(uniqueWords("Phil loves meth LOVES phil"))
