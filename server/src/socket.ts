import { Server, Socket } from "socket.io";

function socket({ io }: { io: Server }) {
    console.log(`Sockets enabled`);

    io.on("connect", (socket:Socket) => {
        console.log(`user connected ${socket.id}`)
        socket.on("create-new-room", (data) => {
            console.log("host is creating new room");
            console.log(data);
        })
    })
}

export default socket;