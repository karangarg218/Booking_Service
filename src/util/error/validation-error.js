const {StatusCodes}= require('http-status-codes')
class ValidationError extends Error{
     constructor(Error){
        let explanation = [];
        Error.errors.forEach((err)=>{
            explanation.push(err)
        })
        this.name='validation error'
        this.message='not able to validate the requiest'
        this.explanation=explanation
        this.statusCode=StatusCodes.BAD_REQUEST
     }
}