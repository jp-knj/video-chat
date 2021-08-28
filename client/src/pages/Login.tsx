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
    <div>
      <div>
        <p>Demo</p>
        <Button label="Join a room" handleClick={clickedToJoinRoom} />
        <Button label="Host a room" handleClick={clickedToJoinRoomAsHost} />
      </div>
    </div>
  );
};
export default Login;
