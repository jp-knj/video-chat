import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Room from "./pages/Room";
import JoiningRoom from "./pages/JoiningRoom";
import {SERVER} from "./utils/wss";
import {useContext, useEffect} from "react";
import io from "socket.io-client";
import {ActionKind, HostContext} from "./contexts/useHost";
import EVENTS from "./config/events";

const App: React.FC = () => {
    const {dispatch} = useContext(HostContext);
        useEffect(() => {
            const connectWithSocketIOServer = () =>{
                let socket = io(SERVER);
                socket.on(EVENTS.connection, () => {
                    console.log("successfully connected with socket ios");
                })
                socket.on(EVENTS.SERVER.SEND_ROOM_ID, (data: any) => {
                    const {roomId} = data;
                    console.log(roomId)
                })
            }
             connectWithSocketIOServer()
    },[])
  return (
      <Router>
        <Switch>
          <Route path="/join-room">
            <JoiningRoom />
          </Route>
          <Route path="/room">
            <Room />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
