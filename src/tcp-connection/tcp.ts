import { httpParser } from "../http-parser/parser";
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

        const { responseHeader , responseBody } : any = router(method , path ,body);

        if(!responseHeader){
            console.log(responseHeader + "NOT FOUND")
            return;
        }

        socket.write(responseHeader);
        socket.write(responseBody);
        // socket.end();
    });

    
 
    socket.on("end",()=>{
        console.log("Disconnected")
    })
})