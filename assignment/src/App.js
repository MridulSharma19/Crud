import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
import Header from './components/header'
import React,{useState} from 'react'
function App() {

  const [isAuth,setAuth]=useState(false)

  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage} />
       <Route path='/admin'  render={() =>
              !isAuth ? (
                <Login isAuth={isAuth}setAuth={setAuth}/>
              ) : (
                <Admin />
              )
            } /> 


      </Switch>
      
    </div>
  );
}

export default App;
