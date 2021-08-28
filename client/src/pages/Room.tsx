import {useContext, useEffect} from "react";
import {HostContext} from "../contexts/useHost";
import * as webRTCHandler from '../utils/webRTCHandler'
import Chats from "../components/Chats"
import ParticipantsList from "../components/ParticipantsList";
import Video from "../components/Video"
import RoomLabel from "../components/RoomLabel";

const Room = () => {
    const {roomId, identity, isHost} = useContext(HostContext);
    useEffect(() =>{
        webRTCHandler.getLocalPreviewAndInitRoomConnection(isHost, identity, roomId)
    },[])
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
