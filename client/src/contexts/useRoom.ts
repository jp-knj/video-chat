import {useState} from "react";

export const useRoom = () => {
    const [roomState, setRoomState ] = useState({
        roomId: "",
        isHost: false,
        username: "",
    });

    const setHost = () => {
        roomState.isHost = true
        setRoomState({
            ...roomState,
            isHost: roomState.isHost
        })
        console.log(`Call sethost:${roomState.isHost}`)
    }

    const resetHost = () => {
        setRoomState({
            ...roomState,
            isHost: false
        })
        console.log(`Call resethost:${roomState.isHost}`)
    }

    return {
        roomState,
        setRoomState,
        setHost,
        resetHost
    }
}