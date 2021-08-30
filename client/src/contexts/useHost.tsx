import {createContext, useContext, useState} from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../config/default";
import EVENTS from "../config/events";

interface Context {
  socket: Socket;
  username?: string;
  setUsername: Function;
  roomId: string;
    paticipants: [];
  roomsState: object;
  setRoomsState: Function
}

const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
  socket,
  setUsername: () => false,
  roomId: "",
    paticipants: [],
  roomsState: {
    isHost: false
  },
  setRoomsState : () => false,
});

const SocketsProvider = (props: any) => {
    const [roomId, setRoomId] = useState<string>("");
    const [paticipants, setPaticipants] = useState<any[]>([]);

  socket.on(EVENTS.SERVER.SEND_ROOM_ID, ({roomId}) => {
      setRoomId(roomId)
    console.log(`Get : SEND_ROOM_ID ${roomId}`)
  });

  socket.on(EVENTS.SERVER.SEND_ALL_USERS, ({connectedUsers}) => {
      setPaticipants(connectedUsers);
      console.log(JSON.stringify(paticipants))
  })

    return (
      <SocketContext.Provider
          value={{
            socket,
            roomId,
              paticipants
          }}
          {...props}
      />
  );
}

export const useSockets = () => useContext(SocketContext);
export default SocketsProvider