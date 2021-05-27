import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import CompanyDetails from "./components/CompanyDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/registration">
            <Register />
          </Route>

          <Route exact path="/details/:id">
            <CompanyDetails />
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
