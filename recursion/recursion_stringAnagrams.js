// Instructions:
// Given a string, return an array of all possible anagrams for that string

function stringAnagrams(str) {
    var arr = str.split("");
    var result = [];
    var str2 = "";
    rStrAnagrams(arr, str2, result);
    return result;
}

function rStrAnagrams(arr, str, result) {
    if (arr.length == 0) {
        result.push(str);
        return;
    }
    for (var i=0; i<arr.length; i++) {
        rStrAnagrams(arrWithoutIndex(arr, i), str2+arr[i], result);
    }
}

// Helper function creates new array without altering original arr
function arrWithoutIndex(arr, index) {
    var arr2 = [];
    for (var i=0; i<arr.length; i++) {
        if (i != index) { arr2.push(arr[i]); }
    }
    return arr2;
}
