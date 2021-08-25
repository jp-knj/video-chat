import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { HostContext } from "../contexts/useHost"

// type State = {
//   identity: string;
//   isHost: boolean;
// };

// const initialState: State = {
//   identity: "",
//   isHost: false,
// };

// type Actions = {
//   type: "SET_IS_HOST";
// };

// const reducer = (state: State, action: Actions) => {
//   switch (action.type) {
//     case "SET_IS_HOST":
//       return { ...state, isHost: true };
//     default:
//       return state;
//   }
// };

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
  const { isHost, dispatch } = useContext(HostContext);
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [roomState, setRoomState] = useState({ roomId: "", nameValue: "" });
  const titleText = isHost ? "Host Meeting" : "Join Meeting";

  const handleRoomIdValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const roomId = String(e.target.value);
    setRoomState({
      ...roomState,
      roomId: roomId,
    });
  };

  const handleNameValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameValue = String(e.target.value);
    setRoomState({
      ...roomState,
      nameValue: nameValue,
    });
  };

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");
    if (isRoomHost) {
      if (dispatch) {
        dispatch({ type: "SET_IS_HOST" })
      }
    }
  }, []);
  return (
    <>
      <div>{titleText}</div>
      <p>JoiningRoom</p>
      <div>
        {!isHost && (
          <Input
            value={roomState.roomId}
            handleChange={handleRoomIdValueChange}
            placeholder="Enter meeting ID"
          />
        )}
        <Input
          value={roomState.nameValue}
          handleChange={handleNameValueChange}
          placeholder="Enter your Name"
        />
      </div>
    </>
  );
};
export default JoiningRoom;
