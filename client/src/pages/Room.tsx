import {useContext} from "react";
import {HostContext} from "../contexts/useHost";

const Room = () => {
  const { identity } = useContext(HostContext);
  return (
      <div>
        {identity && (<span>{identity}</span>)}
          {!identity && (<span>dsfafafa</span>)}
        <p>Room</p>
      </div>
  );
};
export default Room;
