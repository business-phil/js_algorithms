// Instructions:
// Given a string containing characters '0', '1', and '?', where '?'
// can be substituted by '0' or '1', write a recursive function to find
// all valid strings possibilities.
// Ex: '1?0?' => ['1000', '1001'. '1100'. '1101']
function binaryStringExpansion(str) {
    var result = [];
    var str2 = "";
    rBinStrExp(str, str2, result);
    return result;
}

function rBinStrExp(str, str2, result) {
    if (str.length == str2.length) {
        result.push(str2);
    }
    else if (str[str2.length] == '?') {
        rBinStrExp(str, str2 + '0', result);
        rBinStrExp(str, str2 + '1', result);
    }
    else {
        rBinStrExp(str, str2 + str[str2.length], result);
    }
}
