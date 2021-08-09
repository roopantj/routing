import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";
import Users from "./components/pages/User/Users";
import UserForm from './components/pages/User/UserForm';

function App() {
  return(
     <React.Fragment>
       <Header/>
       <Home/>
       <Users/>
       <UserForm/>
     </React.Fragment>
  )
}

export default App;
