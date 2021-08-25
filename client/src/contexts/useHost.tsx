import { Dispatch, createContext, useReducer } from "react";

type State = {
  identity: string;
  isHost: boolean;
};

const initialState: State = {
  identity: "",
  isHost: false,
};

type Actions = {
  type: "SET_IS_HOST" | 'RESET_IS_HOST';
};

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "SET_IS_HOST":
      return { ...state, isHost: true };
    case "RESET_IS_HOST":
      return { ...state, isHost: false };
    default:
      return state;
  }
};

interface ContextType {
  identity: string;
  isHost: boolean;
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
