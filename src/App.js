import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Registration from './Registration';
import Login from './Login';
import Logout from './Logout';

function App() {
  return (
    <div className="app">

      <Router>

        <Switch>

          <Route path="/" exact component={Home}></Route>
          <Route path="/twitter" exact component={Home}></Route>
          <Route path="/twitter/register" exact component={Registration}></Route>
          <Route path="/twitter/login" exact component={Login}></Route>
          <Route path="/logout" exact component={Logout}></Route>

        </Switch>

      </Router>
      {/* <Sidebar/>
      <Feed/>
      <Widgets/> */}
    </div>
  );
}

export default App;
