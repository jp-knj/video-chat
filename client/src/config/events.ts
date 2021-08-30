const EVENTS = {
    connection: "connection",
    CLIENT: {
        CREATE_ROOM: "CREATE_ROOM",
        JOIN_ROOM: "JOIN_ROOM",
        SEND_USERNAME: "SEND_USERNAME"
    },
    SERVER: {
        SEND_ROOM_ID: "SEND_ROOM_ID",
        SEND_ALL_USERS: "SEND_ALL_USERS"
    },
};

export default EVENTS;