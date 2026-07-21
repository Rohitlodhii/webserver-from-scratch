import { getResponseBody, getResponseHeader } from "../response/getResponse"


type RouterResponse = {
    responseHeader : string ;
    responseBody : string;
}

export const router = ( method : string , path : string , body : string) : RouterResponse  => {
    if( method === 'GET'){
        switch( path ){
            default:
                return {
                    responseHeader : "N" , responseBody : 'N'
                }
            case '/':
                return { responseHeader : getResponseHeader , responseBody : getResponseBody};
        }
    }
    else {
        return {
            responseHeader : "N" , responseBody : 'N'
        }
    }
}


//Todo 
// Make this Router typesafe + reponds defaults
//Add Post req 