const ws=require("ws")
const server=new ws.Server({port:'5000'})
server.on("connection",(socket)=>{
    socket.send("Brian Ruhiu")
socket.on("message",(data)=>{
console.log(data.toString())
})
})