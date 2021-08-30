import { v4 as uuidv4 } from "uuid";
import { Server, Socket } from "socket.io";

const EVENTS = {
    connection: "connection",
    CLIENT: {
        CREATE_ROOM: "CREATE_ROOM",
        JOIN_ROOM: "JOIN_ROOM",
        SEND_USERNAME: "SEND_USERNAME"
    },
    SERVER: {
        SEND_ROOM_ID: "SEND_ROOM_ID",
        SEND_ALL_USERS: "SEND_ALL_USERS"
    },
};

let connectedUsers:any = [];
let rooms:any = [];
function socket({ io }: { io: Server }) {
    console.log(`Sockets enabled`);

    io.on(EVENTS.connection, (socket:Socket) => {
        console.log(`user connecteds ${socket.id}`)
        /*
        * When a user creates a new room
        */
        socket.on(EVENTS.CLIENT.CREATE_ROOM, ({roomState}) => {
            const { username } = roomState;
            const roomId = uuidv4(username);
            const newUser = {
                username,
                id: uuidv4(),
                socketId: socket.id,
                roomId
            }
            connectedUsers = [...connectedUsers, newUser]
            const newRoom = {
                 id: roomId,
                 connectedUsers: [newUser]
            }
            socket.join(roomId)
            rooms = [...rooms, newRoom]
            socket.emit(EVENTS.SERVER.SEND_ROOM_ID, { roomId });
            socket.emit(EVENTS.SERVER.SEND_ALL_USERS, { connectedUsers: newRoom.connectedUsers });
        })
        /*
        * When a user join the room
        */
        socket.on(EVENTS.CLIENT.JOIN_ROOM, ({roomState}) => {
            console.log(`Call : Join Room ${JSON.stringify(roomState)}`)

        })
    })
    const createNewRoomHandler = (data: any, socket:Socket) => {
        console.log("Call : createNewRoomHandler")
        // const {identity} = data;
        // const roomId = uuidv4(identity);
        // const newUser = {
        //    identity,
        //    id: uuidv4(),
        //    socketId: socket.id,
        //    roomId
        // }
        // connectedUsers = [...connectedUsers, newUser]
        // const newRoom = {
        //     id: roomId,
        //     connectedUsers: [newUser]
        // }
        // socket.join(roomId)
        // rooms = [...rooms, newRoom]
        // console.log(data.identity)
        // console.log(`RoomId :${roomId} , Idenity : ${identity}`)
        // socket.emit(EVENTS.SERVER.SEND_ROOM_ID, { roomId });
    }
}

export default socket;