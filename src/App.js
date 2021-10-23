import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
// import YojnaDetails from "./components/yojnaDetails/YojnaDetails";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          {/* <Route path="/yojna/:yojna_name">
            <YojnaDetails></YojnaDetails>
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
