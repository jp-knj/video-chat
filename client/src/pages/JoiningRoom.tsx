import { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";

type State = {
  identity: string;
  isHost: boolean;
};

const initialState: State = {
  identity: "",
  isHost: false,
};

type Actions = {
  type: "SET_IS_HOST";
};

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "SET_IS_HOST":
      return { ...state, isHost: true };
    default:
      return state;
  }
};

interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: React.FC<Props> = ({ value, handleChange, placeholder }) => {
  return (
    <input value={value} onChange={handleChange} placeholder={placeholder} />
  );
};

const JoiningRoom = () => {
  const search = useLocation().search;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [roomState, setRoomState] = useState({ roomId: "" });
  const titleText = state.isHost ? "Host Meeting" : "Join Meeting";

  const handleRoomIdValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const roomId = String(e.target.value);
    setRoomState({
      ...roomState,
      roomId: roomId,
    });
  };

  useEffect(() => {
    const isHost = new URLSearchParams(search).get("host");
    if (isHost) dispatch({ type: "SET_IS_HOST" });
  }, []);
  return (
    <>
      <div>{titleText}</div>
      <p>JoiningRoom</p>
      <div>
        <Input
          value={roomState.roomId}
          handleChange={handleRoomIdValueChange}
          placeholder="Enter meeting ID"
        />
      </div>
    </>
  );
};
export default JoiningRoom;
