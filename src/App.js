import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';

function App() {
  return (
    <div className="app">

      {/* <Router>

        <Switch>

          <Route path="/" exact component = {Home}></Route>

        </Switch>

      </Router> */}
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
