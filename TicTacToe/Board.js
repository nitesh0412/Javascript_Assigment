const Cell = require("./Cell.js");

class Board {
  constructor() {
    this.cells = [
      new Cell(), new Cell(), new Cell(),
      new Cell(), new Cell(), new Cell(),
      new Cell(), new Cell(), new Cell()
    ]
    //this.cells[cellNumber]
  }

  isEmpty(cellNumber) {
    return this.cells[cellNumber].isEmpty(); // this.cell.num is empty (player class return true or flase)
  }

  printBoard() {
    for (let i = 0; i < 3; i++) {
      console.log(`${this.cells.slice(i * 3, i * 3 + 3).map(cell => cell.mark).join(" | ")}`);

    }
  }

  // analysis(){
  //   const winPatterns = [ [0,1,2] , [3,4,5], [6,7,8] ,
  //                         [0,3,6], [1,4,7] ,[2,5,8],
  //                         [0,4,8], [2,4,6] ];

  //     let isWinnerFound = false ;

  //     for(let i=0;i<winPatterns.length;i++){
  //     const pattern = winPatterns[i];
  //     const [a,b,c] = pattern ;

  //     if(this.cells[a].mark === this.cells[b].mark && this.cells[b].mark === this.cells[c].mark && this.cells[a].mark !== "*")
  //     {
  //       return "Win"
  //     }
  //   }
  //   if (this.cells.every(cell => cell.mark !== "*")) {
  //     return "Draw";
  //   } else {
  //     return "Continue";
  //   }

  //   }
  analysis() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winPatterns.length; i++) {
      const pattern = winPatterns[i];
      const [a, b, c] = pattern;

      if (this.cells[a].mark === this.cells[b].mark && this.cells[b].mark === this.cells[c].mark && this.cells[a].mark !== "*") {
        return "Win";
      }
    }

    if (this.cells.every(cell => cell.mark !== "*")) {
      console.log("Draw State>>>>>>");
      return "Draw";
    } else {
      return "Continue";
    }
  }

}



module.exports = Board;
