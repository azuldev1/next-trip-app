import logo from './logo.svg';
import './Main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home.js'
import NextTrip from './pages/NextTrip.js'

function App() {
  return (
    <Router>
      <div class="main-wrapper">
        <header>
          <div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
          </a>
          </div>
          <div>
            <a
              href="/next-trip"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next Trip
          </a>
          </div>
        </header>
        <div class="content-wrapper">
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