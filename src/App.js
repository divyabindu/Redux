import React from 'react';
import './App.css';
import Login from './Login';
import EmployeeList  from './EmployeeList';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/employee-list" exact component={EmployeeList}></Route>
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
