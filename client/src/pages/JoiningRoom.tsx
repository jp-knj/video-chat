import { useEffect, useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getRoomExists } from "../utils/api";
import { HostContext } from "../contexts/useHost";
import Button from "../components/Button";

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
  const { isHost, isVideo, dispatch } = useContext(HostContext);
  const [roomState, setRoomState] = useState({ roomId: "", nameValue: "" });
  const [errorState, setErrorState] = useState("");
  const successText = isHost ? "Host" : "Join";
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

  const handleConnectTypeChange = (e: any) => {
    if (dispatch) dispatch({ type: "SET_CONNECT_ONLY_WITH_AUDIO" });
  };

  const handleJoinRoom = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if(isHost) {
      createRoom()
    } else {
      joinRoom()
    }
  };
  const joinRoom = async () => {
    const responseMessage = await getRoomExists(roomState.roomId);
    const { roomExists, full } = responseMessage;
    if(roomExists){
      if(full) {
        setErrorState("Meeting is full. Please try again later");
      } else {
        // Join room
        history.push("/room")
      }
    } else {
      setErrorState("Room not found. Check your meeting Id again");
    }
  }
  const createRoom = () => {
    history.push("/room")
  }
  const history = useHistory();
  const pushToLogin = () => {
    history.push("/");
  };

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");
    if (isRoomHost) {
      if (dispatch) {
        dispatch({ type: "SET_IS_HOST" });
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
        <div>
          <div>
            {isVideo && <span onClick={handleConnectTypeChange}>yes</span>}
            {!isVideo && <span onClick={handleConnectTypeChange}>no</span>}
            <p>Only Audio</p>
          </div>
        </div>
        <div>
          {errorState && (
            <div>
              <p>{errorState}</p>
            </div>
          )}
        </div>
        <div>
          <div>
            <Button label={successText} handleClick={handleJoinRoom} />
            <Button label="cancel" handleClick={pushToLogin} />
          </div>
        </div>
      </div>
    </>
  );
};
export default JoiningRoom;
