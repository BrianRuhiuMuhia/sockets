const socket=new WebSocket("ws://localhost:5000")
socket.addEventListener("open",function({data})
{
    socket.send("hello world")
    socket.addEventListener("message",function({data})
    {
        console.log(data)
    })
})