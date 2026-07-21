


type PostResponseType = {
    responseBody : string;
    responseHeader : string;
}


const responseBody = ( name : string , age : string) : string => {
    return `{
        message : "${name} and ${age}"
    }`
}




export const postResponse = ( body : string ) => {
   const { name  , age } = JSON.parse(body);
   if( !name || !age) {
        return { responseBody : "N" , responseHeader : 'N'};
   };


   const postresponseBody = responseBody(name ,age);

   const postresponseHeader = [
    "HTTP/1.1 200 OK",
    "Content-Type: application/json",
    `Content-Length: ${Buffer.byteLength(postresponseBody)}`,
    "Connection: close",
    "",
    ""
].join("\r\n");

   return {
        responseBody :  postresponseBody, responseHeader : postresponseHeader
   }



}