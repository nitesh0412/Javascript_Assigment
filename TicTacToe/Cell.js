class Cell {
    constructor() //Cell() whenever you call new Cell() this will initiate
    {
      this.mark = "*"
    }

    isEmpty() { 
      if(this.mark === "*")
      return true;
      else
      false
    } 


    markCell(symbol) { 
      this.mark = symbol; 
    } 



}
module.exports = Cell;
