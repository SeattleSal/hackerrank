// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function(array) {
    // get length of array
    // create new array
    // add first row
    // go down last column
    // come back to first column
    // keep track of the location
    
    if (array.length === 0)
      return [];
    if (array[0].length === 1)
      return array[0];
    
    console.log(array[0].length)
    let rows = array.length;
    let columns = array[0].length;
    let numElements = rows * columns;
    let answer = [];
    
    // first row
    for (let i = 0; i < columns; i ++) 
      answer.push(array[0][i])
    
    // last column
    for (let j = 1; j < rows; j++)
      answer.push(array[j][columns-1])
    
    // last row
    for (let k = columns - 2; k >= 0; k--)
      answer.push(array[rows-1][k])
   
    // first column
    for (let l = rows-2; l > 0; l--)
      answer.push(array[l][0])
    
    // create subarray to call recursively
    let subarray = [];
    for (let sub = 1; sub < rows-1; sub++)
      subarray.push(array[sub].splice(1, rows-2))
    // console.log(subarray)
    
    answer = answer.concat(snail(subarray))
    
    return answer;
    
  }
  
  // test cases
  console.log(snail([[]]));
  console.log(snail([[1]]));
  console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
  console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
  console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));