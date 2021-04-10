import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import RoomContainer from './components/room_container'
import Home from './components/Home'
import Profile from './components/profile'
import Landing from './components/landing'
import {UserProvider} from "./UserProvider/UserProvider.js"

function App() {
  return (
    <UserProvider>
    <div className="App">
        <Router>
        <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/signin" component={Home}/>
        <Route path="/classroom/:id" component={RoomContainer}/>
        <Route path="/profile" component={Profile}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
    </div>
    </UserProvider>
  );
}

export default App;