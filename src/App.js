import './Main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home.js'
import NextTrip from './pages/NextTrip.js'

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <header>
          <Link to="/">
            Home
          </Link>
          <Link
            to="/next-trip">
            Next Trip
          </Link>
        </header>
        <div className="content-wrapper">
          <Switch>
            <Route path="/next-trip">
              <NextTrip />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;