import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import MyForm from './MyForm';
import useToken from './Components/UserToken';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  // const token = getToken();
  const { token, setToken } = useToken();
  // const [token, setToken] = useState();
  if(!token) {
    return <MyForm setToken={setToken} />
  }

  return (
    <div className="wrapper">
      {/* <h2>helo {} welcome to the page</h2> */}
      <Dashboard/>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard}>
            <Dashboard />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;