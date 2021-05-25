import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TeacherAction from './components/TeacherComponent/TeacherAction/TeacherAction';
import StudentAction from './components/StudentComponent/StudentAction/StudentAction';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser]  = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser] }>
      {/* <h2>Email:{loggedInUser.email}</h2>
      <h2>Name:{loggedInUser.name}</h2> */}

      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/students/:designation">
            <StudentAction></StudentAction>
          </PrivateRoute>
          <PrivateRoute path="/teachers/:designation">
            <TeacherAction> </TeacherAction>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>    
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

        </Switch>
      </Router>
      
      </UserContext.Provider>
  );
}

export default App;
