import styles from './UserForm.module.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button } from 'reactstrap';


const UserForm =props=>{
    return(
        <div className={styles.userform}>
          <h3>New User</h3>
          <br/>
          <br/>  
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon addonType="append">
          <InputGroupText>@gmail.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <Input placeholder="id"/>
      <br />
       <div className={styles.buttongrp}>
      <Button color="success">Add</Button>
      <Button color="warning">Reset</Button>
      <Button color="danger">Cancel</Button>
      </div>
          </div>
    )
}

export default UserForm;