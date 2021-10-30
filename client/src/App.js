import "./App.css";
import Land from "./components/Land";
import Contact from "./components/Contact";
import NgoList from "./components/Ngo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegisterNGO from "./components/auth/RegisterNGO";
import { initializeApp } from "firebase/app";
import SignupNGO from "./components/SignupNGO";
import LoginNGO from "./components/LoginNGO";
import SignupIndividual from "./components/SignupIndividual";
import LoginIndividual from "./components/LoginIndividual";
import Welcome from "./components/Welcome";
const firebaseConfig = {
  apiKey: "AIzaSyCA70cqobYrO5YllbZsLxY8DpBE27kc1UQ",
  authDomain: "umeed-001.firebaseapp.com",
  projectId: "umeed-001",
  storageBucket: "umeed-001.appspot.com",
  messagingSenderId: "466276989404",
  appId: "1:466276989404:web:69a42c7ceca0f7f7d9f719",
  measurementId: "G-KQ2F4V0X5J",
};

const app = initializeApp(firebaseConfig);
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Land} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/ngo" exact component={NgoList} />
        <Route path="/ngo/login" exact component={LoginNGO} />
        <Route path="/ngo/register" exact component={SignupNGO} />
        <Route path="/user/register" exact component={SignupIndividual} />
        <Route path="/user/login" exact component={LoginIndividual} />
        <Route path="/user/dashboard" exact component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
