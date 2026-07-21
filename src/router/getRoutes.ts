import { responseHeader } from "../response-headers/header"
import { getBaseRouteResponse } from "../route-controllers/getResponse"
import { errorResponseBody, errorResponseHeader } from "../route-controllers/unknownroute";
import { RouterResponse } from "./router"



export const getRouter  = ( path : string ) : RouterResponse => {
        if( path === '/'){

            const responseBody = getBaseRouteResponse();
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