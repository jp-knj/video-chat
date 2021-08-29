import io, {Socket} from "socket.io-client"
import EVENTS from "../config/events"
export const SERVER = 'http://localhost:4000';
let socket = io(SERVER);

export const createNewRoom = (identity: string) => {
    const data = {
        identity
    };
    console.log(`Call : CreateNewRoom/identity: ${identity}`)
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, data);
}
export const joinRoom = (identity:string, roomId:string) => {
    const data = {
        identity,
        roomId
    }
    socket.emit("join-room", data)
}