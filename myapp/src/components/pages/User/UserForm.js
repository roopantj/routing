import styles from './UserForm.module.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Alert } from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import { useRef, useState } from 'react';


const UserForm =props=>{

  const usernameInputRef = useRef('');
  const emailInputRef = useRef('')
  const useridInputRef = useRef('')
  
  const [isValid,setIsValid] =useState(true)
  
  const alert = <Alert color="danger"> Please enter valid details</Alert>;
  const history = useHistory();

  const onAddHandler = () =>{
      const username = usernameInputRef.current.value;
      const email = emailInputRef.current.value;
      const userid = useridInputRef.current.value;
      if(username.trim().length>0 && email.trim().length>0 && userid.trim().length>0)
        history.replace('/success',{id:userid, name:username}) 
      else
        setIsValid(false) 
  }
  
  const onResetHandler = () =>{
     usernameInputRef.current.value=''
     emailInputRef.current.value=''
     useridInputRef.current.value=''
     setIsValid(true)
  }

  return(
        <div className={styles.userform}>
          <h3>New User</h3>
          <br/>
          {!isValid?alert:null}
          <br/>  
          <InputGroup>
             <InputGroupAddon addonType="prepend">
                   <InputGroupText>@</InputGroupText>
             </InputGroupAddon>
             <Input innerRef={usernameInputRef} placeholder="username" />
           </InputGroup>
           <br />
           <InputGroup>
              <Input innerRef={emailInputRef} placeholder="email" />
              <InputGroupAddon addonType="append">
                  <InputGroupText>@gmail.com</InputGroupText>
              </InputGroupAddon>
           </InputGroup>
           <br />
           <Input innerRef={useridInputRef} placeholder="id" type="number"/>
           <br />
           <div className={styles.buttongrp}>
              <Button onClick={onAddHandler} color="success">Add</Button>
              <Button onClick={onResetHandler} color="warning">Reset</Button>
              <Link to='/'>
                 <Button color="danger">Cancel</Button>
              </Link>
           </div>
        </div>
    )
}

export default UserForm;