import io, {Socket} from "socket.io-client"
export const SERVER = 'http://localhost:4000';
let socket = io(SERVER);

export const createNewRoom = (identity: string) => {
    const data = {
        identity
    };
    console.log(`Call : CreateNewRoom/identity: ${identity}`)
}
export const joinRoom = (identity:string, roomId:string) => {
    const data = {
        identity,
        roomId
    }
    socket.emit("join-room", data)
}