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

    const handleRoomId = (e:React.ChangeEvent<HTMLInputElement>) => {
        const roomId = String(e.target.value);
        setRoomState({
                ...roomState,
                roomId: roomId,
              });
        console.log(`Call handleRoomId:${roomState.roomId}`)
    }

    const handleUsername = (e:React.ChangeEvent<HTMLInputElement>) => {
        const username = String(e.target.value);
        setRoomState({
            ...roomState,
            username: username,
        });
        console.log(`Call handleUsername:${roomState.username}`)
    }

    return {
        roomState,
        setRoomState,
        setHost,
        resetHost,
        handleRoomId,
        handleUsername
    }
}