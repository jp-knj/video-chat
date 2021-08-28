import {useState} from "react";

const MicButton = () => {
 const [isMuted, setIsMuted] = useState<boolean>(false)
 const MicState = isMuted ? "OFF" : "ON"
const handleMic = () => {
  setIsMuted(!isMuted);
}
 return <div onClick={handleMic}>Mic:{MicState}</div>
}
const CameraButton = () => {
    const [isCamera, setIsCamera] = useState<boolean>(false)
    const CameraState = isCamera ? "OFF" : "ON"
    const handleCamera = () => {
        setIsCamera(!isCamera)
    }
 return <div onClick={handleCamera}>Camera:{CameraState}</div>
}
const LeaveButton = () => {
    const handleLeave = () => {
        const siteUrl = window.location.origin;
        window.location.href = siteUrl;
    }
 return (<div>
     <button onClick={handleLeave}>
         Leave
     </button>
 </div>)
}
const SwitchToScreenSharingButton = () => {
    const [ isScreenSharing, setIsScreenSharing] = useState(false)
    const screenShareState = isScreenSharing ? "Not Share" : "Share!"
    const handleScreenShare = () => {
        setIsScreenSharing(!isScreenSharing)
    }
 return <div onClick={handleScreenShare}>{screenShareState}</div>
}
const Video = () => {
 return (
     <div>
      <MicButton/>
      <CameraButton/>
      <LeaveButton />
      <SwitchToScreenSharingButton />
     </div>
 )
}
export  default  Video