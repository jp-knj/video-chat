import { Dispatch, createContext, useReducer } from "react";

type State = {
  identity: string;
  isHost: boolean;
  isVideo: boolean;
};

const initialState: State = {
  identity: "",
  isHost: false,
  isVideo: false,
};

type Actions = {
  type: "SET_IS_HOST" | "RESET_IS_HOST" | "SET_CONNECT_ONLY_WITH_AUDIO";
};

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "SET_IS_HOST":
      return { ...state, isHost: true };
    case "RESET_IS_HOST":
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
