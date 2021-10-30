import "./App.css";
import Land from "./components/Land";
import Contact from "./components/Contact";
import NgoList from "./components/Ngo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Land} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/ngo" exact component={NgoList} />
      </Switch>
    </Router>
  );
}

export default App;
