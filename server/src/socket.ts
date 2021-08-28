import { Server, Socket } from "socket.io";

function socket({ io }: { io: Server }) {
    console.log(`Sockets enabled`);

    io.on("connect", (socket:Socket) => {
        console.log(`user connected ${socket.id}`)
    })
}

export default socket;