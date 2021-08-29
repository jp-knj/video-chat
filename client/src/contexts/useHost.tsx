import { Dispatch, useState, createContext, useReducer, useContext } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../config/default";

interface Context {
  socket: Socket;
  username?: string;
  setUsername: Function;
  roomId?: string;
  roomsState: object;
  setRoomsState: Function
}

const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
  socket,
  setUsername: () => false,
  roomsState: {
    isHost: false
  },
  setRoomsState : () => false,
});

type State = {
  identity: string;
  isHost: boolean;
  isVideo: boolean;
  roomId: string;
};

const initialState: State = {
  identity: "",
  isHost: false,
  isVideo: false,
  roomId: "",
};

export enum ActionKind {
  setIsHost = 'SET_IS_HOST',
  resetIsHost = 'RESET_IS_HOST',
  setConnectOnlyWithAudio = 'SET_CONNECT_ONLY_WITH_AUDIO',
  setRoomId = 'SET_ROOM_ID',
  setIdentity= 'SET_IDENTITY'
}

type Action = {
  type: ActionKind,
  payload?: {
    identity?: string,
    roomId?:string
  }
}

export const setIsHostAction: Action = {
  type: ActionKind.setIsHost,
}

export const resetIsHostAction: Action = {
  type: ActionKind.resetIsHost,
}

export const setConnectOnlyWithAudioAction: Action = {
  type: ActionKind.setConnectOnlyWithAudio,
}
export const setRoomIdAction: Action = {
  type: ActionKind.setRoomId,
}

export const setIdentity: Action = {
  type: ActionKind.setIdentity,
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionKind.setIsHost:
      return { ...state, isHost: true };
    case ActionKind.resetIsHost:
      return { ...state, isHost: false };
    case ActionKind.setConnectOnlyWithAudio:
      return { ...state, isVideo: !state.isVideo };
    case ActionKind.setRoomId:
      return { ...state, roomId: action.payload?.roomId || "aaaa"}
    case ActionKind.setIdentity:
      console.log(state.identity)
      return { ...state, identity: action.payload?.identity || "ssss"}

    default:
      return state;
  }
};

interface ContextType {
  identity: string;
  isHost: boolean;
  isVideo: boolean;
  roomId: string;
  dispatch?: Dispatch<Action>;
}

export const HostContext = createContext<ContextType>(initialState);

export const HostContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hostState, dispatch] = useReducer(reducer, initialState);

  return (
    <HostContext.Provider
      value={{
        ...hostState,
        dispatch,
      }}
    >
      {children}
    </HostContext.Provider>
  );
};
export const SocketsProvider = (props: any) => {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [roomsState, setRoomsState ] = useState({
    roomId: "",
    isHost: false,
    username: "",
  });

  const handleHost = () => {
    setRoomsState({
      ...roomsState,
      isHost: !roomsState.isHost
    })
  }

  return (
      <SocketContext.Provider
          value={{
            socket,
            setUsername,
            roomsState,
            setRoomsState,
            roomId,
          }}
          {...props}
      />
  );
}

export const useSockets = () => useContext(SocketContext);
