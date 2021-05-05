import React, { useState } from 'react';
import Login from './pages/Login';
import Orders from './pages/Orders';
//import Routes from './routes/Routes';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  const [authentication, setAuthentication] = useState(false)
  const handlesetAuthentication = () => {
    setAuthentication(true)
  }
  return (<div className="App">
    { authentication ? <Router>
      <Switch>
      <Route exact path = "/" component = {Orders}/>:
      <Route  exact path = "/" component = {Login}/>
      </Switch>
    </Router> : 
    <Router>
      <Switch>
        <Route exact path = "/">
          <Login
          handlesetAuthentication = {handlesetAuthentication}
          /> 
        </Route>
        <Route exact path = "/orders">
          <Orders
          handlesetAuthentication = {handlesetAuthentication}
          /> 
        </Route>
      </Switch>
    </Router>
}</div>
  );
}

export default App;
