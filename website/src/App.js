import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import RoomContainer from './components/room_container'
import Home from './components/Home'
function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/classroom/:id" component={RoomContainer}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
