import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Admin from "../components/admin/Admin"
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"
import User from "../components/user/User"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Admin} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  )
}

export default App;