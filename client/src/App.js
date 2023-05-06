import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AssignRoles from './AssignRoles';
import AddMed from './AddMed';
import Supply from './Supply'

import Home from './Home';
import { Helmet } from "react-helmet";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/roles" component={AssignRoles} />
          <Route path="/addmed" component={AddMed} />
          <Route path="/supply" component={Supply} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
