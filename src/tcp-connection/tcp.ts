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
        const { responseHeader , responseBody } : any = router(chunk);

        socket.write(responseHeader);
        socket.write(responseBody);
        // socket.end();
    });

    
 
    socket.on("end",()=>{
        console.log("Disconnected")
    })
})