import { server } from "./tcp-connection/tcp";

const PORT = 5000;

server.listen(PORT , ()=>{
    console.log("TCP server running")
})