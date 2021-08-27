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

enum ActionKind {
  setIsHost = 'SET_IS_HOST',
  resetIsHost = 'RESET_IS_HOST',
}

type Action = {
  type: ActionKind,
  payload: {}
}

export const setIsHostAction: Action = {
  type: ActionKind.setIsHost,
  payload: {}
}

export const resetIsHostAction: Action = {
  type: ActionKind.resetIsHost,
  payload: {}
}
type Actions = {
  type: "SET_IS_HOST" | "RESET_IS_HOST" | "SET_CONNECT_ONLY_WITH_AUDIO" | "SET_ROOM_ID" | "SET_IDENTITY";
};

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case ActionKind.setIsHost:
      return { ...state, isHost: true };
    case ActionKind.resetIsHost:
      return { ...state, isHost: false };
    case "SET_CONNECT_ONLY_WITH_AUDIO":
      return { ...state, isVideo: !state.isVideo };
    default:
      return state;
  }
};

interface ContextType {
  identity: string;
  isHost: boolean;
  isVideo: boolean;
  roomId: string;
  dispatch?: Dispatch<Actions>;
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
