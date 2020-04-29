import React from 'react';
import Login from './Components/Login'
import Home from './Components/Home'

//from create react dom
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//from redux
import store from './store'
import {Provider} from 'react-redux'

function App() {
//
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
