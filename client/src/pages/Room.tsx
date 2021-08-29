import Chats from "../components/Chats"
import ParticipantsList from "../components/ParticipantsList";
import Video from "../components/Video"
import RoomLabel from "../components/RoomLabel";
import {useSockets} from "../contexts/useHost";

const Room = () => {
    const { roomId } = useSockets()
  return (
      <div>
          <ParticipantsList />
          <Video />
          <Chats/>
          <RoomLabel  roomId={roomId}/>
      </div>
  );
};
export default Room;
