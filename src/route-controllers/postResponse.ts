


type PostResponseType = {
    status : Number ;
    responseBody : string ;

}




export const getPostBaseResponse = ( body : string ) : PostResponseType => {
    const { name , age } = JSON.parse(body);
    if ( !name || !age ) {
        return {
            status : 400 ,
            responseBody : ``
        }
    }
     return {
        status : 201 ,
        responseBody : `{
            msg : "Your name is ${name} and age is ${age}"
            status : 201
        }`
     }
}
