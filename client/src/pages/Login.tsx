import { useContext, useEffect } from "react";
import { HostContext, resetIsHostAction } from "../contexts/useHost"
import Button from "../components/Button";
import { useHistory } from "react-router-dom";;

const Login = () => {
  const { dispatch } = useContext(HostContext);
  const history = useHistory();
  const clickedToJoinRoom = () => {
    history.push("/join-room");
  };
  const clickedToJoinRoomAsHost = () => {
    history.push("/join-room?host=true");
  };

  useEffect(() => {
      if (dispatch) dispatch(resetIsHostAction)
  }, []);

  return (
    <div className={"w-full h-screen flex items-center justify-center"}>
      <div className={"w-96 py-4 bg-white border-1 border-gray-600 rounded-xl flex flex-col items-center justify-evenly backdrop-filter"}>
        <p className={"text-3xl text-blue-500"}>Demo</p>
        <div className={"flex justify-between mt-2"}>
          <Button label="Join a room" handleClick={clickedToJoinRoom} primary/>
          <div className={"ml-2"} />
          <Button label="Host a room" handleClick={clickedToJoinRoomAsHost} />
        </div>
      </div>
    </div>
  );
};
export default Login;
