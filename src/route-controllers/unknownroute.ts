
export const errorResponseBody = JSON.stringify({
    error: "Not Found",
    message: "The requested endpoint or resource does not exist.",
    statusCode: 404
});

export const errorResponseHeader = [
    "HTTP/1.1 404 Not Found",
    "Content-Type: application/json",
    `Content-Length: ${Buffer.byteLength(errorResponseBody)}`,
    "Connection: close",
    "",
    ""
].join("\r\n");


