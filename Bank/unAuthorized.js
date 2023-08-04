const BaseError = require("./BaseError");


class  UnauthorizedError extends BaseError{
  // super()
    constructor(specificMessage)
    {  
        super("UnAuthorized Acess",Unauthorized,401,specificMessage)

    }
}

module.exports=UnauthorizedError