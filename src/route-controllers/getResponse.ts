import { RouterResponse } from "../router/router";





export const getBaseRouteResponse = () : string => {
    return  JSON.stringify({
         "name" : "Ramesh",
         "age" : 21
     })
}