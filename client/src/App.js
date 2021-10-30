import "./App.css";
import Land from "./components/Land";
import Contact from "./components/Contact";
import NgoList from "./components/Ngo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegisterNGO from "./components/auth/RegisterNGO";
import { initializeApp } from "firebase/app";
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
        <Route path="/ngo/register" exact component={RegisterNGO} />
      </Switch>
    </Router>
  );
}

export default App;
