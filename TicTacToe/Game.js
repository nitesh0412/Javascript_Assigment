const Board = require("./Board.js");
const Cell = require("./Cell.js");
const Player = require("./Player.js");

// const player1 = new Player("anonymous", "O")
// const player2 = new Player(" nitesh", "X")
class Game {
    constructor(board, player1, player2) {
        this.board = board;
        this.turn = 0
        this.isGameOver = false
        this.player1 = player1
        this.player2 = player2
    }
    static newGame(player1, player2) {
        let board = new Board();
        let playerone = new Player(player1, "X")
        let playertwo = new Player(player2, "O")
        // let xyz = 10
        return new Game(board, playerone, playertwo);
    }

    play(cellNumber) {

        let currentPlayer;

        if (this.isGameOver) {
            return "Game has ended, Please start new game";
        }
        if (!this.board.isEmpty(cellNumber)) {
            console.log("false / cell is not empty")
        }
        if (this.turn % 2 === 0) {
            currentPlayer = this.player1;
        }
        else {
            currentPlayer = this.player2;
        }
        console.log(this.turn)

        currentPlayer.markCell(this.board.cells[cellNumber]);
        const result = this.board.analysis();
        if (result === "Win") {
            this.isGameOver = true;
            return console.log("winner", currentPlayer)
        }
        else if (result == "Draw") {
            this.isGameOver = true;
            return console.log("Draw");
        }
        console.log(result)
        console.log("++++++++++++++++++++++++++++++++++++++++")
        this.turn++;
        this.board.printBoard();
        return;
    }

}


const g1 = Game.newGame("pqr", "xyz");
console.log(g1.play(2))
console.log(g1.play(1))
console.log(g1.play(3))
console.log(g1.play(4))
console.log(g1.play(6))
console.log(g1.play(8))
console.log(g1.play(7))
console.log(g1.play(5))
console.log(g1.play(0))

console.log("---------Game2-------------");

const g2 = Game.newGame("Nitesh", "anonymous");


console.log(g2.play(1)); // Player 2 (X) marks cell 1
console.log(g2.play(0));
console.log(g2.play(3)); // Player 1 (O) marks cell 3
console.log(g2.play(2)); // Player 1 (O) marks cell 2
console.log(g2.play(4)); // Player 2 (X) marks cell 4
console.log(g2.play(5)); // Player 2 (X) marks cell 5
console.log(g2.play(6)); // Player 1 (O) marks cell 6
console.log(g2.play(7)); // Player 1 (O) marks cell 7
console.log(g2.play(8)); // Player 2 (X) marks cell 8


// console.log("---------Game2-------------");

// const game2 = new Game();
// console.log(game2.play(1));
// console.log(game2.play(2));
// console.log(game2.play(4));
// console.log(game2.play(6));
// console.log(game2.play(8));
// console.log(game2.play(3));
// console.log(game2.play(0));
// console.log(game2.play(5));



// const game = new Game();
// console.log("---------Game1-------------");
// console.log(game.play(0));
// console.log(game.play(1));
// console.log(game.play(2));
// console.log(game.play(3));
// console.log(game.play(4));
// console.log(game.play(5));
// console.log(game.play(6));
// console.log(game.play(7));
// console.log(game.play(8));









































// const Board = require("./Board.js");
// const Cell = require("./Cell.js");
// const Player = require("./Player.js");



// class Game {

//     play(cellNumber) {
//     //let currentPlayer = this.player1;

//     if (!board.isEmpty(cellNumber)) {
//       return ("Occupied");
//     }
//     plyr.markCell(board.cells[0]);
//     // board.printBoard();

//   }

// }


// let board = new Board()
// board.printBoard();
// let plyr = new Player("Nitesh" , "x")
// console.log(game.play(0));//even=X



// // let game = new Game(board); // Pass board and players to the Game constructor
// // const player1 = new Player("Player 1", "X");
// // const player2 = new Player("Player 2", "O");
// // console.log("---------Game1-------------");
// // console.log(game.play(0));//even=X




























// // const board = new Board();
// // board.printBoard();

// // const player = new Player("Player 1", "X");
// // player.markCell(board.cells[0]);

// // board.printBoard();

