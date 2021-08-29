import { useEffect, useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useRoom } from "../contexts/useRoom";
import {
  ActionKind,
  HostContext,
  setConnectOnlyWithAudioAction,
  setRoomIdAction,
  useSockets
} from "../contexts/useHost";
import Button from "../components/Button";
import Input from "../components/Input"

const JoiningRoom = () => {
  const search = useLocation().search;
  const { roomState, setRoomState, setHost } = useRoom();
  // const { roomsState, setRoomsState} = useSockets();
  const { identity, isVideo, roomId,dispatch } = useContext(HostContext);
  /// const [roomState, setRoomState] = useState({ roomId: "", identity: "" });
  const [errorState, setErrorState] = useState("");
  const successText = roomState.isHost ? "Host" : "Join";
  const titleText = roomState.isHost ? "Host Meeting" : "Join Meeting";

  const handleRoomIdValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const roomId = String(e.target.value);
   //   setRoomState({
   //    ...roomState,
   //    roomId: roomId,
   //  });
   //  const setRoomId = {
   //    type: ActionKind.setRoomId,
   //    payload: {
   //      roomId
   //    }
   //  }
   //  if (dispatch) dispatch(setRoomId)
  };

  const handleNameValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const identity = String(e.target.value);
    // setRoomState({
    //   ...roomState,
    //   identity: identity,
    // });
    // const setIdentity = {
    //   type: ActionKind.setIdentity,
    //   payload: {
    //     identity
    //   }
    // }
    // if (dispatch) dispatch(setIdentity)
  };

  const handleConnectTypeChange = (e: any) => {
    if (dispatch) dispatch(setConnectOnlyWithAudioAction);
  };

  const handleJoinRoom = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if(roomState.isHost) {
      createRoom()
    } else {
      joinRoom()
    }
  };
  const joinRoom = async () => {
    // const responseMessage = await getRoomExists(roomState.roomId);
    // const { roomExists, full } = responseMessage;
    // if(roomExists){
    //   if(full) {
    //     setErrorState("Meeting is full. Please try again later");
    //   } else {
    //     // Join room
    //     history.push("/room")
    //   }
    // } else {
    //   setErrorState("Room not found. Check your meeting Id again");
    // }
  }
  const createRoom = () => {
    if(dispatch) dispatch(setRoomIdAction)
    history.push("/room")
  }
  const history = useHistory();
  const pushToLogin = () => {
    history.push("/");
  };

  useEffect(() => {
    const isHost = new URLSearchParams(search).get("host");
    if (isHost) setHost()
  }, []);

  return (
    <div className={"w-full h-screen flex items-center justify-center relative"}>
      <div className={"w-96 bg-white border border-gray-600 py-4 flex flex-col items-start rounded-xl"} >
      <h2 className={"text-lg ml-6 mt-3 font-bold"}>{titleText}</h2>
      <div className={"ml-6 mt-2"}>
        {!roomState.isHost && (
          <Input
            value=""
            handleChange={handleRoomIdValueChange}
            placeholder="Enter meeting ID"
          />
        )}
        <div className={"mt-2"} />
        <Input
          value=""
          handleChange={handleNameValueChange}
          placeholder="Enter your Name"
        />
        <div>
          <div className={"flex mt-2"}>
            {isVideo && <span onClick={handleConnectTypeChange}>yes</span>}
            {!isVideo && <span onClick={handleConnectTypeChange}>no</span>}
            <p className={"ml-4"}>Only Audio</p>
          </div>
        </div>
        <div>
          {errorState && (
            <div className={"mt-2"}>
              <p className={"text-red-400"}>{errorState}</p>
            </div>
          )}
        </div>
        <div>
          <div className={"flex mt-2"}>
            <Button label={successText} handleClick={handleJoinRoom} primary/>
            <div className={"ml-2"} />
            <Button label="cancel" handleClick={pushToLogin} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default JoiningRoom;
