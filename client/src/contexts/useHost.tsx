import {createContext, useContext, useState} from "react";
import io, { Socket } from "socket.io-client";
import { useRoom } from "./useRoom";
import { SOCKET_URL } from "../config/default";
import EVENTS from "../config/events";

interface Context {
  socket: Socket;
  username?: string;
  setUsername: Function;
  roomId: string;
  roomsState: object;
  setRoomsState: Function
}

const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
  socket,
  setUsername: () => false,
  roomId: "",
  roomsState: {
    isHost: false
  },
  setRoomsState : () => false,
});

const SocketsProvider = (props: any) => {
    const [roomId, setRoomId] = useState<string>("");

  socket.on(EVENTS.SERVER.SEND_ROOM_ID, ({roomId}) => {
      setRoomId(roomId)
    console.log(`Get : SEND_ROOM_ID ${roomId}`)
  });

    return (
      <SocketContext.Provider
          value={{
            socket,
            roomId
          }}
          {...props}
      />
  );
}

export const useSockets = () => useContext(SocketContext);

export default SocketsProvider