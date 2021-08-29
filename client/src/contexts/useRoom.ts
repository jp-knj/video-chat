import {useState} from "react";
import { useSockets} from "./useHost";

interface roomProps {
    roomId: string,
    isHost: boolean,
    username: string
}
export const useRoom = () => {
    const { socket } = useSockets();

    const [roomState, setRoomState ] = useState<roomProps>({
        roomId: "",
        isHost: false,
        username: "",
    });

    const updateRoomState = (roomId: string) => {
        setRoomState({
            ...roomState,
            roomId: roomId
        })
    }
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
            roomId
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
        updateRoomState,
        setHost,
        resetHost,
        handleRoomId,
        handleUsername
    }
}