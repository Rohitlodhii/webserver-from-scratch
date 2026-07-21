import { httpParser } from "../http-parser/parser";
import { errorResponseBody, errorResponseHeader } from "../route-controllers/unknownroute";
import { isValidMethod } from "../validators/payload";
import { getRouter } from "./getRoutes";
import { postRouter } from "./postRoutes";


export type RouterResponse = {
    responseHeader : string ;
    responseBody : string;
}

// export const router = ( method : string , path : string , body : string) : RouterResponse  => {
//     if( method === 'GET'){
//         switch( path ){
//             default:
//                 return {
//                     responseHeader : "N" , responseBody : 'N'
//                 }
//             case '/':
//                 return { responseHeader : getResponseHeader , responseBody : getResponseBody};
//         }
//     } else if ( method === 'POST'){
//         switch (path){
//             default:
//                 return {
//                     responseHeader : "N" , responseBody : 'N'
//                 }
//             case '/':
//                 const { responseHeader , responseBody } = postResponse(body);
//                 return { responseHeader , responseBody };
//         }
//     }
//     else {
//         return {
//             responseHeader : "N" , responseBody : 'N'
//         }
//     }
// }



export const router = ( chunk : any ) : RouterResponse => {
         
            if(!chunk){
                return {
                    responseBody : errorResponseBody ,
                    responseHeader : errorResponseHeader
                }
            }
            const rawRequest  = chunk.toString();
            const { method , path , version , headers , body } : any = httpParser(rawRequest);
            
            // RETURN 404 IF NOT GET POST 

            if (!isValidMethod(method)){
                 return {
                    responseBody : errorResponseBody ,
                    responseHeader : errorResponseHeader
                }
            }


            // Check Method and Route 

            if ( method === 'GET'){
                return getRouter(path);
            } else {
                return postRouter(
                    path , body
                )
            }
            
            
    
}






//Todo 
// Make this Router typesafe + reponds defaults
//Add Post req 