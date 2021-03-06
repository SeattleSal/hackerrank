// Consider the following version of Bubble Sort:

// for (int i = 0; i < n; i++) {
    
//     for (int j = 0; j < n - 1; j++) {
//         // Swap adjacent elements if they are in decreasing order
//         if (a[j] > a[j + 1]) {
//             swap(a[j], a[j + 1]);
//         }
//     }
    
// }
// Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

// Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
// First Element: firstElement, where  is the first element in the sorted array.
// Last Element: lastElement, where  is the last element in the sorted array.


function countSwaps(a) {
    // Write your code here
  let count = 0;
  
  // sort and count each swap
  let n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
          [a[j], a[j+1]] = [a[j+1], a[j]]
            count++;
        }
    }
    
}
  
  // assign first and last element (or just use index)
  
  console.log(`Array is sorted in ${count} swaps.`);
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[n-1]}`)

}

countSwaps([3,2,1])