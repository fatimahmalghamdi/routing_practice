import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/:number">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
