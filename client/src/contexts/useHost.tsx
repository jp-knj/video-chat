import { Dispatch, createContext, useReducer } from "react";

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
    identity: string
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
      return { ...state, roomId: state.roomId}
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
