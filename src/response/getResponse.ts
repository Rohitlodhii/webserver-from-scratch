


 const getReqdata = {
    "name" : "Ramesh",
    "age" : 21
}



export const getResponseBody = JSON.stringify(getReqdata);
console.log(getResponseBody)


export const getResponseHeader = [
    "HTTP/1.1 200 OK",
    "Content-Type: application/json",
    `Content-Length: ${Buffer.byteLength(getResponseBody)}`,
    "Connection: close",
    "",
    ""
].join("\r\n");