import {useContext} from "react";
import {HostContext} from "../contexts/useHost";
import Chats from "../components/Chats"
import ParticipantsList from "../components/ParticipantsList";
import Video from "../components/Video"
import RoomLabel from "../components/RoomLabel";

const Room = () => {
  const { identity, roomId } = useContext(HostContext);
  return (
      <div>
          <ParticipantsList />
          <Video />
          <Chats/>
          <RoomLabel roomId={roomId}/>
      </div>
  );
};
export default Room;
