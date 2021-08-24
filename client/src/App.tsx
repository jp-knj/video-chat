// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Room from "./pages/Room";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/join-room"></Route>
          <Route path="/room">
            <Room />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
