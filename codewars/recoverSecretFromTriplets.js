// codewars
// recover secret from random triplets

// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

var recoverSecret = function(triplets) {
  
    // how many arrays do we have
    // assume each letter only appears once
    secret = [];
    
    for (let i in triplets) {
      x = triplets[i][0]
      y = triplets[i][1]
      z = triplets[i][2]
      
      // if x is not in secret, add to the beginning
      if (!secret.includes(x))
        secret.unshift(x);
      // if y is not in secret, add just after x
      if (!secret.includes(y))
        secret.splice(secret.indexOf(x) + 1, 0, y);
        // if y is in secret but in front of x, move to behind x
      else if (secret.includes(y) && (secret.indexOf(y) < secret.indexOf(x))) {
        secret.splice(secret.indexOf(y), 1) // remove y
        secret.splice(secret.indexOf(x) + 1, 0, y) // insert y after x
      }
      // if z is not in secret, add just after y
      if (!secret.includes(z))
        secret.splice(secret.indexOf(y) + 1, 0, z)
        // if z is in secret but in front of y, move to behind y
      else if (secret.includes(z) && (secret.indexOf(z) < secret.indexOf(y))) {
        secret.splice(secret.indexOf(z), 1)
        secret.splice(secret.indexOf(y) + 1, 0, z)
      }
    }
    // join before returning secret
    return secret.join('');
    
  }

  // test cases

    triplets1 = [
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
  ]
  console.log(recoverSecret(triplets1))
  
  triplets2 = [
    ['t','s','f'],
    ['a','s','u'],
    ['m','a','f'],
    ['a','i','n'],
    ['s','u','n'],
    ['m','f','u'],
    ['a','t','h'],['t','h','i'],['h','i','f'],['m','h','f'],['a','u','n'],['m','a','t'],
    ['f','u','n'], ['h','s','n'],['a','i','s'],['m','s', 'n'],['m','s','u']
  ]
  console.log(recoverSecret(triplets2))
  
