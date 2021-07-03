// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

// my solution:

function isSolved(board) {
    for (let i = 0; i < 3; i++){
      if ((board[i][0] === board[i][1]) && 
          (board[i][1] === board[i][2])) {
        if (board[i][2] === 1) return 1;
        if (board[i][2] === 2) return 2;
      }
    
      if ((board[0][i] === board[1][i]) && 
          (board[1][i] === board[2][i])) {
        if (board[2][i] === 1) return 1;
        if (board[2][i] === 2) return 2;
      }
    }
    
      if ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2])) {
          if (board[0][0] === 1) return 1;
          if (board[0][0] === 2) return 2;
      }
        
      if ((board[2][0] === board[1][1]) && (board[1][1] === board[0][2])) {
        
          if (board[2][0] === 1) return 1;
          if (board[2][0] === 2) return 2;
      }
    
  // no winner
    // game not over
    for (let i = 0; i < 3; i++) {
      if (board[i].includes(0)) return -1;
      
    }
    // game over no empty spaces
    return 0;
  
  
  }

console.log(isSolved([[0,0,1],
    [0,1,2],
    [2,1,0]]))