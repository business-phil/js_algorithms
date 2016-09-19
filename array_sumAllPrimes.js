// Instructions:
// Sum all prime numbers up to and including a given number.

// Note: Will need to updated to remove built-in function
// and optimize efficiency.

function sumPrimes(num) {
    var integerList = [],
        primeList = [],
        primeSum = 0;
    for(var i = 2; i <= num; i++) {              // Creates an array from 2 to provided integer
        integerList.push(i);
    }
    for (i = 0; i < integerList.length;) {       // Identifies and filters prime numbers using the Sieve of Eratosthenes
        primeList.push(integerList[i]);            //   Psuedocode Source: https://primes.utm.edu/prove/prove2_1.html
        integerList = integerList.filter(function(n) {
            return n % integerList[i] !== 0;
        });
    }
    for (i = 0; primeList[i] <= num; i++) {      // Sums all prime numbers up to and including the provided integer
        primeSum += primeList[i];
    }
    return primeSum;
}


sumPrimes(1000);
