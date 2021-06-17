// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

// Example


// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Returns

// int: the frequency of a in the substring

function repeatedString(s, n) {
    // Write your code here
    console.log(s)
    console.log(n)

    // check constraints
    if (n < 1 || n > 100) return;

    // calculate length of string s
    // multiple frequency by n
    // return number

    // calculate number of 'a' in string s
    let frequency = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            frequency += 1;
        }
    }
    console.log("frequency " + frequency)

    // calculate number of string s in length n
    let length = 1;
    if (n < s.length) console.log('short');
    else if (n === s.length) return frequency;
    else {
        console.log(n / s.length)
    }

    frequency *= n;

    return frequency;


}

// test cases
console.log(repeatedString('aba', 10));