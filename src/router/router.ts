import { getResponseBody, getResponseHeader } from "../response/getResponse"


export const router = ( method : any , path : any , body : any) => {
    if( method === 'GET'){
        switch( path ){
            case '/':
                return { ResponseHeader : getResponseHeader , ResponseBody:getResponseBody};
        }
    }
}


//Todo 
// Make this Router typesafe + reponds defaults
//Add Post req 