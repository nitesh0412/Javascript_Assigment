const BaseError = require("./BaseError");

class InvalidType extends BaseError{


    constructor(specificMessage){
        super("Invalid  ","invalid-datatype  ",406,specificMessage)
    }
   
}


module.exports=InvalidType