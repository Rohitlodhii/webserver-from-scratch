import { getResponseBody, getResponseHeader } from "../response/getResponse"
import { postResponse } from "../response/postResponse";


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
    } else if ( method === 'POST'){
        switch (path){
            default:
                return {
                    responseHeader : "N" , responseBody : 'N'
                }
            case '/':
                const { responseHeader , responseBody } = postResponse(body);
                return { responseHeader , responseBody };
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