// Instructions:
// Given an integer, print squares of integers up to that number,
// starting with odd numbers in ascending order, then evens in
// descending order.  Solve using recursion and no loops.
// Ex: (5) => "1, 9, 25, 16, 4"; (8) => "1, 9, 25, 49, 64, 36, 16, 4"

// RETURN STRING by passing result string between functions
function risingSquaresAsString(num) {
    if (num<1) { return "0"; }
    // Round down in case num is a float
    num = Math.floor(num);
    return risingHelper1(num, num, "");
}

function risingHelper1(rNum, num, result) {
    if (rNum === 1) { return "1"; }
    else if (rNum%2 === 1) {
        result = risingHelper1(rNum-2, num, result);
        result += ", " + (rNum*rNum);
        if (rNum == num) { result = risingHelper1(rNum-1, num, result); }
    }
    else {
        if (rNum == num) { result = risingHelper1(rNum-1, num, result); }
        result += ", " + (rNum*rNum);
        if (rNum>2) { result = risingHelper1(rNum-2, num, result); }
    }
    return result;
}

// Alternate solution:

// RETURN ARRAY by passing result array memory address
function risingSquaresAsArray(num) {
    if (num<1) { return [0]; }
    // Round down in case num is a float
    num = Math.floor(num);
    var result = [];
    risingHelper2(num, num, result);
    return result;
}
function risingHelper2(rNum, num, result) {
    if (rNum === 1) { result.push(1); }
    else if (rNum%2 === 1) {
        risingHelper2(rNum-2, num, result);
        result.push(rNum*rNum);
        if (rNum == num) { risingHelper2(rNum-1, num, result); }
    }
    else {
        if (rNum == num) { risingHelper2(rNum-1, num, result); }
        result.push(rNum*rNum);
        if (rNum>2) { risingHelper2(rNum-2, num, result); }
    }
}
