import Store from "./components/Store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={(props) => <Store />} />
        <Route
          path="/product/:id"
          component={(props) => <Product {...props} />}
        />
        <Route path="/about" component={(props) => <About />}></Route>
        <Route>404 Page </Route>
      </Switch>
    </Router>
  );
  // <div className="App"></div>;
}

export default App;
