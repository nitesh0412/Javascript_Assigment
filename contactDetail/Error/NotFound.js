const BaseError = require("./BaseError");

class Notfound extends BaseError{


    constructor(specificMessage){
        super("Not Found","not-found",404,specificMessage)
    }
   
}


module.exports=Notfound