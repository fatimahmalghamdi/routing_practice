import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ColoredHead from './components/ColoredHead';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/:number">
          <About />
        </Route>
        <Route  path="/:title/:titlecolor/:backgroundcolor">
          <ColoredHead />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
