import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import AuthContext from "./AuthContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <AuthContext.Provider value={isLoggedIn}>
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (isLoggedIn ? <Home /> : <Redirect to="/login" />)}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                handleLogin={handleLogin}
                setIsLoggedIn={setIsLoggedIn}
              />
            )}
          />
        </Switch>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
