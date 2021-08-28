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
export const createNewRoom = (identity: string) => {
    const data = {
        identity
    };
    socket.emit('create-new-room', data);
}
export const joinRoom = (identity:string, roomId:string) => {
    const data = {
        identity,
        roomId
    }
    socket.emit("join-room", data)
}