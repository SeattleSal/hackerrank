function whoIsWinner(piecesPositionList) {
  
  // create board 6x7
  let board = [
    ['-','-','-','-','-','-','-'],
    ['-','-','-','-','-','-','-'],
    ['-','-','-','-','-','-','-'],
    ['-','-','-','-','-','-','-'],
    ['-','-','-','-','-','-','-'],
    ['-','-','-','-','-','-','-']
  ]
  let col;
  
  // loop through each position piece
  for (let piece = 0; piece < piecesPositionList.length; piece++) {
    console.log(`Piece: ${piece + 1}`)
    
    // get letter of column
    let letter = piecesPositionList[piece][0]
    // get color Yellow or Red
    let color = (piecesPositionList[piece][2] === 'Y') ? "Yellow" : "Red";
    console.log("Position: " + letter + " " + color)
    
    // figure out column based on letter
    switch(letter) {
      case 'A': 
        col = 0; break;
      case 'B': 
        col = 1; break;
      case 'C': 
        col = 2; break;
      case 'D': 
        col = 3; break;
      case 'E': 
        col = 4; break;
      case 'F': 
        col = 5; break;
      case 'G': 
        col = 6; break;
      default:
        break;
    }
    
    // set piece on the board
    // check rows from bottom (5) up to top (0)
    for(let row = 5; row >= 0; row--){
       if (board[row][col] === '-') {
           board[row][col] = color;
           console.log(`Line 49: set ${color} piece at row: ${row} col: ${col}`);
           row = -1;
        }
     }
    
    // console.log(`Board at piece ${piece + 1}:`)
    // console.log(board)
    
    // check if winner
    if (piece + 1 > 7) {
      console.log("possible winner... let's check")
      console.log(board)
      
      // check column
      if (board[5][col] == board[4][col] &&
         board[4][col] == board[3][col] &&
         board[3][col] == board[2][col] && 
         board[5][col] != '-') {
          console.log(`Winner! ${color}`);
        return color;
      }
      // check row
      // check diagonal
    }
  } // end of pieces loop, all pieces placed
  
  // if we get to end of the positions and no winner, return "Draw"
  return "Draw";
}

whoIsWinner(["A_Red",
             "B_Yellow",
             "A_Red",
             "B_Yellow",
             "A_Red", 
             "B_Yellow", 
             "G_Red", 
             "B_Yellow"]);