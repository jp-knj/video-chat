import * as wss from "./wss"
const defaultConstraints = {
    audio: true,
    video: true
}
export const getLocalPreviewAndInitRoomConnection = (
    isHost :boolean,
    identity : string,
    roomId: any = null
) => {
    navigator.mediaDevices.getUserMedia(defaultConstraints).then((stream:MediaStream) => {
        console.log('successfuly received local stream')
        let localVideoStream = stream
        showLocalVideoPreview(localVideoStream);
        isHost? wss.createNewRoom(identity) : wss.joinRoom(identity, roomId)
    }).catch((err) => {
        console.log("error occurred when trying to get an access to local stream")
        console.log(err);
    })
}

const showLocalVideoPreview = (stream : MediaStream) => {
    // show preview video
}