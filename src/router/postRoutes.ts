import { responseHeader } from "../response-headers/header"
import { getBaseRouteResponse } from "../route-controllers/getResponse"
import { getPostBaseResponse } from "../route-controllers/postResponse";
import { errorResponseBody, errorResponseHeader } from "../route-controllers/unknownroute";
import { RouterResponse } from "./router"



export const postRouter  = ( path : string , body : string ) : RouterResponse => {
        if( path === '/'){

            const { status , responseBody } = getPostBaseResponse(body);

            if( status == 400) {
                return {
                    responseBody : errorResponseBody ,
                    responseHeader : errorResponseHeader
                }
            }
            return {
                responseBody ,
                responseHeader : responseHeader(responseBody)
            }
        } else {
            return {
                responseBody : errorResponseBody ,
                responseHeader : errorResponseHeader
            }
        }
}       