



export const responseHeader = ( responseBody : string ) => {
    return [
    "HTTP/1.1 200 OK",
    "Content-Type: application/json",
    `Content-Length: ${Buffer.byteLength(responseBody)}`,
    "Connection: close",
    "",
    ""
].join("\r\n");
}