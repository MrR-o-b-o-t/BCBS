import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
