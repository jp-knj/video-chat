import io from "socket.io-client"

const SERVER = 'http://localhost:4000';

let socket:any = null;

export const connectWithSocketIOServer = () => {
    socket = io(SERVER);

    socket.on("connect", () => {
        console.log("successfully connected with socket io");
        console.log(socket.io);
    })
}