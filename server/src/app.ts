import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import config from "config";
import logger from "./utils/logger";
import cors from "cors"
import socket from "./socket";

const port = config.get<number>("port");
const host = config.get<string>("host");
const corsOrigin = config.get<string>("corsOrigin");

const app = express();
app.use(cors());

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: corsOrigin,
    credentials: true,
  },
});
let connectedUsers = [];
let rooms:any = [];

app.get("/", (_, res) => res.send(`Server is up and running version`));
app.get("/api/room-exists/:roomId", (req, res) => {
  const { roomId } = req.params;
  const room = rooms.find((room:any) => room.id === roomId);
  if(room){
    // send res that room exists
    if(room.connectedUser.length > 3) {
      return res.send({roomExists: true, full: true})
    } else {
      return res.send({roomExists: true, full: false})
    }
  } else {
    // send res that room doesnt exist
    return  res.send({roomExist: false})
  }
})
httpServer.listen(port, host, () => {
  logger.info(`🚀 Server is listening 🚀`);
  logger.info(`http://${host}:${port}`);

  socket({ io });
});
