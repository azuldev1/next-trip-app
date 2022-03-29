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
        <div  className="header-wrapper">
        <header>
          <div className="header-container">
            <div>
              <Link to="/">
                Home
              </Link>
            </div>
            <div>
              <Link
                to="/next-trip">
                Next Trip 0.0.1
              </Link>
            </div>
            </div>
        </header>
        </div>
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