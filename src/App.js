import { Route, Switch } from "react-router";
import "./App.css";
import DigimonsPage from "./pages/DigimonsPage";
import SearchDigimonPage from "./pages/SearchDigimonPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/digimons">
            <DigimonsPage />
          </Route>
          <Route path="/search">
            <SearchDigimonPage />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
