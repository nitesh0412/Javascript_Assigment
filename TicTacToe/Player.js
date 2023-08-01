class Player{
      constructor(name ,symbol){
        this.name = name
        this.symbol = symbol
      }

      markCell(cellObj) { 
        cellObj.markCell(this.symbol); 
      } 

      isEmpty() {
        return this.mark === "*";
      }

  
}
module.exports = Player;