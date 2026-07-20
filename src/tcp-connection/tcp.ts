import { httpParser } from "../http-parser/getRequest";
import { router } from "../router/router";


const net = require('net');

export const server = net.createServer(( socket : any ) => {
    console.log("Client Connected");

    socket.on("data" , (chunk : any)=>{

            // console.log(chunk.toString());
        if(!chunk){
            return;
        }
        const rawRequest  = chunk.toString();
        const { method , path , version , headers, body } : any = httpParser(rawRequest);

        console.log(method);
        console.log(path);
        console.log(body);

        const { ResponseHeader , ResponseBody } : any = router(method , path ,body);

        socket.write(ResponseHeader);
        socket.write(ResponseBody);
        // socket.end();
    });

    
 
    socket.on("end",()=>{
        console.log("Disconnected")
    })
})