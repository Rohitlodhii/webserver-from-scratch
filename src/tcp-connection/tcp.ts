

const net = require('net');

export const server = net.createServer(( socket : any ) => {
    console.log("Client Connected");

    socket.on("data" , (data : any)=>{
        console.log(data.toString());
    })

    socket.on("end",()=>{
        console.log("Disconnected")
    })
})