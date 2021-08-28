const defaultConstraints = {
    audio: true,
    video: true
}
export const getLocalPreviewAndInitRoomConnection = (
    isHost :boolean,
    identity : string,
    roomId: any = null
) => {
    navigator.mediaDevices.getUserMedia(defaultConstraints).then(stream => {
        console.log('successfuly received local stream')
        const localStream = stream
        showLocalVideoPreview(localStream);
        // isRoom ? wss.createNewRoom(identity): wss.joionRoom(roomId, identity)
    }).catch((err) => {
        console.log(
            "error occurred when trying to get an access to local stream"
        )
    })
}

const showLocalVideoPreview = (stream :any) => {
    // show preview video
}