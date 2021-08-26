import { Server, Socket } from "socket.io";

function socket({ io }: { io: Server }) {
    console.log(`Sockets enabled`);
}

export default socket;