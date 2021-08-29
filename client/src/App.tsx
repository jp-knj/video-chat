import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Room from "./pages/Room";
import JoiningRoom from "./pages/JoiningRoom";

const App: React.FC = () => {
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
