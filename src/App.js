import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddOrder from "./components/orders/AddOrder";
import EditOrder from "./components/orders/EditOrder";
import Order from "./components/orders/Order";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/orders/add" component={AddOrder} />
          <Route exact path="/orders/edit/:id" component={EditOrder} />
          <Route exact path="/orders/:id" component={Order} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
