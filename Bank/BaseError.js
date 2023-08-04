class BaseError extends Error{

    constructor(message,name,httpStatusCode,specificMessage){
        super(message,name)
        this.httpStatusCode=httpStatusCode
        this.specificMessage=specificMessage
    }


}


module.exports=BaseError    