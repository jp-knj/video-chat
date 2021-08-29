const EVENTS = {
    connection: "connection",
    CLIENT: {
        CREATE_ROOM: "CREATE_ROOM",
        SEND_ROOM_ID: "SEND_ROOM_ID",
        JOIN_ROOM: "JOIN_ROOM",
    },
    SERVER: {
        SEND_ROOM_ID: "SEND_ROOM_ID",
        JOINED_ROOM: "JOINED_ROOM",
        ROOM_MESSAGE: "ROOM_MESSAGE",
    },
};

export default EVENTS;