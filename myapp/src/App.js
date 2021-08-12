import React from "react";
import {Route,Switch} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";
import Users from "./components/pages/User/Users";
import UserForm from './components/pages/User/UserForm';
import UserDetails from "./components/pages/User/UserDetails";
import Success from './components/pages/Success/Success';
import NoPageFound from './components/pages/NoPageFound/NoPageFound';

function App() {
  return(
     <React.Fragment>
       <Header/>
       <Switch>
           <Route path='/' exact component={Home}/>
           <Route path='/users/:userId' component={UserDetails}/>
           <Route path='/users' component={Users}/>
           <Route path='/add-user' component={UserForm}/>
           <Route path='/success' component={Success}/>
           <Route path='*' component={NoPageFound}/>
       </Switch>
     </React.Fragment>
  )
}

export default App;
